const request = require("request");

module.exports = db => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let getSinglePet = (req, res) => {
    let petId = req.params.id;
    let userId = req.cookies.user_id;

    console.log("*** petId ***", petId);
    console.log("*** userId ***", userId);

    db.pet.getSinglePet(petId, userId, (error, pet) => {
      if (error) {
        console.log("*** error retrieving single pet ***", error);
      } else {
          console.log("*** pet ***", pet);
          const data = {
            pet
          };
          res.render("Pet/Index", data);
      } 

    });
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    getSinglePet
  };
};
