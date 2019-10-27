module.exports = db => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let index = (req, res) => {
    // let userId = req.cookies.userId;
    let userId = 1;
      db.appointment.getAllAppointments(userId, (error, allAppointments) => {
        db.appointment.getClinicByUser(userId, (error, allClinicsByUser) => {
          const data = {
            allAppointments,
            allClinicsByUser
          };
          res.render("Appointment/Index", data);
        })
      });
  };

  let add = (req, res) => {
    if (req.method === "GET") {
      res.render("Appointment/Add");
    } else if (req.method === "POST") {
      // console.log("*** req.body ***", req.body);
      const pet_id = 1;
      let { clinic_id, date, time } = req.body;

      // console.log("*** clinic_id, date, time ***", clinic_id, date, time);

      time = date + " " + time + ":00 Asia/Singapore";

      // console.log("*** time ***", time);

      const newAppointment = [pet_id, clinic_id, date, time];

      db.appointment.add(newAppointment, (error, addedAppointment) => {
        // console.log("*** addedWeight ***", addedWeight);
        res.render("Appointment/Add", { addedAppointment });
      });
    }
  };

  let addClinic = (req, res) => {
      // console.log("*** req.body ***", req.body);
      // const userId = req.cookies.userId;
      const userId = 1;
      const newClinic = req.body;
      db.appointment.addClinic(userId, newClinic, (error, addedClinic) => {
        console.log("*** addedClinic ***", addedClinic);
        res.redirect("/appointment");
      });
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index,
    add,
    addClinic
  };
};
