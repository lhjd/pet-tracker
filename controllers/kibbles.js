module.exports = db => {
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
        db.kibbles.getFeedingKibbles(userId, (error, allFeeding) => {
          const data = {
            allKibbles,
            allPets,
            allFeeding
          };
          response.render("Kibbles/Index", data);
        });
      });
    });
  };

  const add = (req, res) => {
    // userId = req.cookies.user_id;
    let userId = 1;
    console.log("*** kibbles controller add ***");
    console.log("*** req.body ***", req.body);

    db.kibbles.add(req, userId, (error, addedKibble) => {
      console.log("*** addedKibble ***", addedKibble);
      res.redirect("/kibbles");
    });
  };

  const addFeeding = (req, res) => {
    // userId = req.cookies.user_id;
    let userId = 1;
    console.log("*** kibbles controller addFeeding ***");
    console.log("*** req.body ***", req.body);

    db.kibbles.addFeeding(req, userId, (error, addedFeeding) => {
      // console.log("*** addedFeeding ***", addedFeeding);
      // console.log("*** req.body.kibbles_id ***", req.body.kibbles_id);
      // console.log("*** addedFeeding.id ***", addedFeeding[0].id);
      const kibblesId = req.body.kibbles_id;
      const feedingId = addedFeeding[0].id;
      db.kibbles.addFeedingKibbles(kibblesId, feedingId, (error, addedFeedingKibbles) => {
        if (error) {
          console.log("*** error ***", error)
        }
        // console.log("*** addedFeedingKibbles ***", addedFeedingKibbles);

        res.redirect("/kibbles");
      });

    });
  };

  const getFeedingKibbles = (req, res) => {
    // userId = req.cookies.user_id;
    let userId = 1;
    console.log("*** kibbles controller getFeeding ***");
    // console.log("*** req.body ***", req.body);

    db.kibbles.getFeedingKibbles(userId, (error, allFeeding) => {
      console.log("*** allFeeding ***", allFeeding);
      res.redirect("/kibbles");
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
    addFeeding,
    getFeedingKibbles
  };
};
