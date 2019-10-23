module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
  
    let indexControllerCallback = (req, res) => {
        // set dummy petId for now, to be retrieve from req.cookie.pet_id
        let petId = 1;
        db.appointment.getAllAppointments(petId, (error, allAppointments) => {
          console.log("*** allAppointments ***", allAppointments);
          res.render('Appointment/Index', { allAppointments });
        });
    };
  
  
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
      index: indexControllerCallback,
    };
  
  }
  