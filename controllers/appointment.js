module.exports = db => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  const index = (req, res) => {
    // let userId = req.cookies.userId;
    let userId = 1;
    db.appointment.getAllAppointmentsByUser(userId, (error, allAppointmentsByUser) => {
      db.appointment.getClinicByUser(userId, (error, allClinicsByUser) => {
        db.pet.getPetByUserId(userId, (error, allPetsByUser) => {
          const data = {
            allAppointmentsByUser,
            allClinicsByUser,
            allPetsByUser
          };
          res.render("Appointment/Index", data);
        });
      });
    });
  }

  const addClinicByUser = (req, res) => {
    const userId = 1;
    const newClinic = req.body;
    db.appointment.addClinicByUser(userId, newClinic, (error, addedClinic) => {
      if (error) {
        console.log("*** error in database query ***", error);
      }
      res.redirect("/appointment");
    });
  }

  const addAppointmentByUser = (req, res) => {
    // const userId = req.cookies.user_id
    const userId = 1;
    const newAppointment = req.body;
    db.appointment.addAppointmentByUser(userId, newAppointment, (error, addedAppointment) => {
      if (error) {
        console.log("*** error in database query ***", error);
      }
      res.redirect("/appointment");
    });
  }

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
