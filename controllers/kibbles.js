module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
  
    let indexControllerCallback = (request, response) => {
        // userId = request.cookies.user_id;
        let userId = 1;

        db.kibbles.getAll(userId, (error, allKibbles) => {
          response.render('Kibbles/Index', { allKibbles });
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
  