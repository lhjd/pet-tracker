module.exports = db => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  const index = (request, response) => {
    // const userId = request.cookies.user_id;
    const userId = 1;

    db.allergy.getAllAllergies(userId, (error, allAllergies) => {
      db.pet.getPetByUserId(userId, (error, allPets) => {
          const data = {
            allAllergies,
            allPets,
          };

          response.render("Allergy/Index", data);
      });
    });
  };

  const addAllergy = (req, res) => {
      const newAllergy = req.body;
      db.allergy.addAllergy(newAllergy, (error, addedAllergy) => {
        res.redirect("/allergy");
      });
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index,
    addAllergy
  };
};
