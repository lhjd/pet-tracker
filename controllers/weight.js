module.exports = db => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let all = (req, res) => {
    // const petId = req.body.petId;
    const petId = 1;
    db.weight.getAllWeightsByPet(petId, (error, allWeightsByPet) => {
      if (allWeightsByPet) {
        const data = allWeightsByPet.map(weight => ({
          x: weight.date,
          y: weight.record
        }));
        res.send({ data });
      } else {
        res.send("");
      }
    });
  };

  const index = (req, res) => {
    // const userId = req.cookies.user_id;
    const userId = 1;

    db.pet.getPetByUserId(userId, (error, allPets) => {
      // console.log("*** allPets ***", allPets);
      if (allPets) {
        const defaultPetId = allPets[0].pet_id;
        console.log("*** defaultPetId ***", defaultPetId);
        db.weight.getAllWeightsByPet(defaultPetId, (error, allWeightsByPet) => {
          const data = {
            allWeightsByPet,
            allPets
          };
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
      res.redirect("/weight");
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
