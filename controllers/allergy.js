require("dotenv").config();
const sha256 = require("sha256");

module.exports = db => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  const index = (req, res) => {
    if (req.cookies.user_id && req.cookies.session_id) {
      let userId = req.cookies.user_id;
      let sessionId = req.cookies.session_id;
      let hashedSessionId = sha256(process.env.SALT + userId);

      if (sessionId === hashedSessionId) {
        db.allergy.getAllAllergies(userId, (error, allAllergies) => {
          db.pet.getPetByUserId(userId, (error, allPets) => {
            const data = {
              allAllergies,
              allPets
            };

            res.render("Allergy/Index", data);
          });
        });
      } else {
        res.redirect("/login");
      }
    } else {
      res.redirect("/login");
    }
  };

  const addAllergy = (req, res) => {
    if (req.cookies.user_id && req.cookies.session_id) {
      let userId = req.cookies.user_id;
      let sessionId = req.cookies.session_id;
      let hashedSessionId = sha256(process.env.SALT + sessionId);

      if (sessionId === hashedSessionId) {
        const newAllergy = req.body;
        db.allergy.addAllergy(newAllergy, (error, addedAllergy) => {
          res.redirect("/allergy");
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
    addAllergy
  };
};
