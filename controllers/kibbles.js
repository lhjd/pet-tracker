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
          db.pet.getPetByUserId(userId, (error, allPets) => {

            const data = {
              allKibbles,
              allPets
            };
            response.render('Kibbles/Index', data);
          })
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
  