module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
  
    let index = (req, res) => {
        // set dummy petId for now, to be retrieve from req.cookie.pet_id
        let petId = 1;
        db.appointment.getAllAppointments(petId, (error, allAppointments) => {
          // console.log("*** allAppointments ***", allAppointments);
          res.render('Appointment/Index', { allAppointments });
        });
    };
  
    let add = (req, res) => {
      if (req.method === "GET") {
        res.render('Appointment/Add');
      } else if (req.method === "POST") {
        console.log("*** req.body ***", req.body);
        const pet_id = 1;
        let { clinic_id, date, time } = req.body;

        console.log("*** clinic_id, date, time ***", clinic_id, date, time);

        time = date + " " + time + ":00 Asia/Singapore";

        console.log("*** time ***", time);
        
        const newAppointment = [ pet_id, clinic_id, date, time ];

        db.appointment.add(newAppointment, (error, addedAppointment) => {
          // console.log("*** addedWeight ***", addedWeight);
          res.render('Appointment/Add', { addedAppointment });
        });
      }
  };

  
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
      index,
      add
    };
  
  }
  