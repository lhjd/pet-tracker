require("dotenv").config();
const moment = require("moment");
const sha256 = require("sha256");

module.exports = db => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */
  const getWeightData = (req, res) => {
    if (req.cookies.user_id && req.cookies.session_id) {
      const userId = req.cookies.user_id;
      const sessionId = req.cookies.session_id;
      const hashedSessionId = sha256(process.env.SALT + userId);
      if (sessionId === hashedSessionId) {
        const petId = req.params.id;
        db.weight.getAllWeightsByPet(petId, (error, allWeightsByPet) => {
          if (allWeightsByPet) {
            const graphData = allWeightsByPet.map(weight => ({
              x: weight.date,
              y: weight.record
            }));
            const tableData = allWeightsByPet.map(weight => [
              moment(weight.date).format("L"),
              weight.record
            ]);
            console.log("*** tableData ***", tableData);
            res.send({ graphData, tableData });
          } else {
            res.send(null);
          }
        });
      } else {
        res.redirect("/login");
      }
    } else {
      res.redirect("/login");
    }
  };

  const index = (req, res) => {
    if (req.cookies.user_id && req.cookies.session_id) {
      const userId = req.cookies.user_id;
      const sessionId = req.cookies.session_id;
      const hashedSessionId = sha256(process.env.SALT + userId);

      if (sessionId === hashedSessionId) {
        db.pet.getPetByUserId(userId, (error, allPets) => {
          if (allPets) {
            let petId = allPets[0].pet_id;

            if (req.query.pet_id) {
              petId = req.query.pet_id;
            }
            db.weight.getAllWeightsByPet(petId, (error, allWeightsByPet) => {
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
      } else {
        res.redirect("/login");
      }
    } else {
      res.redirect("/login");
    }
  };

  const addWeight = (req, res) => {
    if (req.cookies.user_id && req.cookies.session_id) {
      let userId = req.cookies.user_id;
      let sessionId = req.cookies.session_id;
      let hashedSessionId = sha256(process.env.SALT + userId);

      if (sessionId === hashedSessionId) {
        // const { pet_id, date, record } = req.body;
        // const newWeight = [pet_id, date, record];
        const newWeight = req.body;

        db.weight.addWeight(newWeight, (error, addedWeight) => {
          res.send("added weight record!");
        });
      } else {
        res.redirect("/login");
      }
    } else {
      res.redirect("/login");
    }
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index,
    addWeight,
    getWeightData
  };
};
