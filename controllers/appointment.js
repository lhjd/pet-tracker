module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
  
    let indexControllerCallback = (request, response) => {
        db.appointment.getAllAppointments((error, allAppoinments) => {
          response.render('Appointment/Index', { allAppoinments });
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
  