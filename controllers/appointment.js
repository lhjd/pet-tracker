require("dotenv").config();
const sha256 = require("sha256");

module.exports = db => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  const index = (req, res) => {
    if (req.cookies.user_id && req.cookies.session_id) {
      const userId = req.cookies.user_id;
      const session_id = req.cookies.session_id;
      const hashed_session_id = sha256(process.env.SALT + userId);
      if (session_id === hashed_session_id) {
        db.appointment.getAllAppointmentsByUser(
          userId,
          (error, allAppointmentsByUser) => {
            db.appointment.getClinicByUser(
              userId,
              (error, allClinicsByUser) => {
                db.pet.getPetByUserId(userId, (error, allPetsByUser) => {
                  const data = {
                    allAppointmentsByUser,
                    allClinicsByUser,
                    allPetsByUser
                  };
                  res.render("Appointment/Index", data);
                });
              }
            );
          }
        );
      } else {
        res.redirect("/login");
      }
    } else {
      res.redirect("/login");
    }
  };

  const addClinicByUser = (req, res) => {
    if (req.cookies.session_id && req.cookies.user_id) {
      const userId = req.cookies.user_id;
      const sessionId = req.cookies.session_id;
      const hashedSessionId = sha256(process.env.SALT + userId);
      if (sessionId === hashedSessionId) {
        const newClinic = req.body;
        db.appointment.addClinicByUser(
          userId,
          newClinic,
          (error, addedClinic) => {
            if (error) {
              console.log("*** error in database query ***", error);
            }
            res.redirect("/appointment");
          }
        );
      } else {
        res.redirect("/login");
      }
    } else {
      res.redirect("/login");
    }
  };

  const addAppointmentByUser = (req, res) => {
    if (req.cookies.user_id && req.cookies.session_id) {
      const userId = req.cookies.user_id;
      const sessionId = req.cookies.session_id;
      const hashedSessionId = sha256(process.env.SALT + userId);
      if (sessionId === hashedSessionId) {
        const newAppointment = req.body;
        db.appointment.addAppointmentByUser(
          userId,
          newAppointment,
          (error, addedAppointment) => {
            if (error) {
              console.log("*** error in database query ***", error);
            }
            res.redirect("/appointment");
          }
        );
      } else {
        res.redirect("/login");
      }
    } else {
      res.redirect("/login");
    }
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index,
    addClinicByUser,
    addAppointmentByUser
  };
};
