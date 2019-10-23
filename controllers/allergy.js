module.exports = db => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let index = (request, response) => {
    db.allergy.getAll((error, allAllergies) => {
      response.render("Allergy/Index", { allAllergies });
    });
  };

  let add = (req, res) => {
    if (req.method === "GET") {
      res.render("Allergy/Add");
    } else if (req.method === "POST") {
      console.log("*** req.body ***", req.body);
      const pet_id = 1;
      const { kibbles_id, symptom, food } = req.body;
      console.log("*** kibbles_id, symptom, food ***", kibbles_id, symptom, food);
      const newAllergy = [pet_id, kibbles_id, symptom, food];

      db.allergy.add(newAllergy, (error, addedAllergy) => {
        // console.log("*** addedWeight ***", addedWeight);
        res.render("Allergy/Add", { addedAllergy });
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
};
