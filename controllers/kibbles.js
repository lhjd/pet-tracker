module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */
  
    const index = (request, response) => {
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
    }

    const add = (req, res) => {
        // userId = req.cookies.user_id;
        let userId = 1;
        console.log("*** kibbles controller add ***");
        console.log("*** req.body ***", req.body);

        db.kibbles.add(req, userId, (error, addedKibble) => {
          console.log("*** addedKibble ***", addedKibble);
          res.redirect("/kibbles");
        })

    }

    const addFeeding = (req, res) => {
        // userId = req.cookies.user_id;
        let userId = 1;
        console.log("*** kibbles controller addFeeding ***");
        console.log("*** req.body ***", req.body);

        db.kibbles.addFeeding(req, userId, (error, addedFeeding) => {
          console.log("*** addedFeeding ***", addedFeeding);
          res.redirect("/kibbles");
        })

    }
  
  
    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
      index,
      add,
      addFeeding
    };
  
  }
  