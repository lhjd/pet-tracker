module.exports = db => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let all = (req, res) => {
    const petId = req.params.id;

    db.weight.getAllWeightsByPet(petId, (error, allWeightsByPet) => {
      if (allWeightsByPet) {
        const data = allWeightsByPet.map(weight => ({
          x: weight.date,
          y: weight.record
        }));
        res.send({ data });
      } else {
        res.send(null);
      }
    });
  };

  const index = (req, res) => {
    // const userId = req.cookies.user_id;

    // console.log("*** req.query ***", req.query);

    const userId = 1;

    db.pet.getPetByUserId(userId, (error, allPets) => {
      // console.log("*** allPets ***", allPets);
      if (allPets) {

        let petId = allPets[0].pet_id;

        if (req.query.pet_id) {
          petId = req.query.pet_id;
        }

        // console.log("*** petId ***", petId);
        db.weight.getAllWeightsByPet(petId, (error, allWeightsByPet) => {
          const data = {
            allWeightsByPet,
            allPets
          };
          // console.log("*** allWeightByPet!! ***", allWeightsByPet);
          res.render("Weight/Index", data);
        });
      } else {
        res.render("Weight/Index");
      }
    });
  };

  const addWeight = (req, res) => {
    const { pet_id, date, record,  } = req.body;
    const newWeight = [pet_id, date, record];

    db.weight.addWeight(newWeight, (error, addedWeight) => {
      console.log("*** addedWeight ***", addedWeight);
      res.send("added weight record!");
    });
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index,
    addWeight,
    all
  };
};
