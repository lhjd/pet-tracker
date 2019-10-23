module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
  
    let indexControllerCallback = (request, response) => {
        db.allergy.getAll((error, allAllergies) => {
          response.render('Allergy/Index', { allAllergies });
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
  