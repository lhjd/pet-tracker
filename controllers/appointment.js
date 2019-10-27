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
        db.pet.getPetByUserId(userId, (error, allPetsByUser) => {
          const data = {
            allAppointments,
            allClinicsByUser,
            allPetsByUser
          };
          res.render("Appointment/Index", data);
        });
      });
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

  const addClinic = (req, res) => {
    // console.log("*** req.body ***", req.body);
    // const userId = req.cookies.userId;
    const userId = 1;
    const newClinic = req.body;
    db.appointment.addClinic(userId, newClinic, (error, addedClinic) => {
      console.log("*** addedClinic ***", addedClinic);
      res.redirect("/appointment");
    });
  };

  const addAppointment = (req, res) => {

    console.log("*** req.body ***", req.body);

    // const userId = req.cookies.user_id
    const userId = 1;
    const newAppointment = req.body;

    db.appointment.addAppointment(userId, newAppointment, (error, addedAppointment) => {
      if (error) {
        console.log("*** error in query ***", error);
      } else {
        console.log("*** addedAppointment ***", addedAppointment);
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
    add,
    addClinic,
    addAppointment
  };
};
