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
        db.kibbles.getAll(userId, (error, allKibbles) => {
          db.pet.getPetByUserId(userId, (error, allPets) => {
            db.kibbles.getFeedingKibbles(userId, (error, allFeeding) => {
              db.kibbles.getConsumption(userId, (error, kibblesConsumption) => {
                console.log("*** kibblesConsumption ***", kibblesConsumption);
                const data = {
                  allKibbles,
                  allPets,
                  allFeeding,
                  kibblesConsumption
                };
                res.render("Kibbles/Index", data);
              });
            });
          });
        });
      } else {
        res.redirect("/login");
      }
    } else {
      res.redirect("/login");
    }
  };

  const add = (req, res) => {
    if (req.cookies.user_id && req.cookies.session_id) {
      let userId = req.cookies.user_id;
      let sessionId = req.cookies.session_id;
      let hashedSessionId = sha256(process.env.SALT + userId);

      if (sessionId === hashedSessionId) {
        db.kibbles.add(req, userId, (error, addedKibble) => {
          res.redirect("/kibbles");
        });
      } else {
        res.redirect("/login");
      }
    } else {
      res.redirect("/login");
    }
  };

  const addFeeding = (req, res) => {
    if (req.cookies.user_id && req.cookies.session_id) {
      let userId = req.cookies.user_id;
      let sessionId = req.cookies.session_id;
      let hashedSessionId = sha256(process.env.SALT + userId);
      if (sessionId === hashedSessionId) {
        db.kibbles.addFeeding(req, userId, (error, addedFeeding) => {
          const kibblesId = req.body.kibbles_id;
          const feedingId = addedFeeding[0].id;
          db.kibbles.addFeedingKibbles(
            kibblesId,
            feedingId,
            (error, addedFeedingKibbles) => {
              if (error) {
                console.log("*** error ***", error);
              }
              res.redirect("/kibbles");
            }
          );
        });
      } else {
        res.redirect("/login");
      }
    } else {
      res.redirect("/login");
    }
  };

  const getFeedingKibbles = (req, res) => {
    if (req.cookies.user_id && req.cookies.session_id) {
      let userId = req.cookies.user_id;
      let sessionId = req.cookies.session_id;
      let hashedSessionId = sha256(process.env.SALT + userId);

      if (sessionId === hashedSessionId) {
        db.kibbles.getFeedingKibbles(userId, (error, allFeeding) => {
          res.redirect("/kibbles");
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
    add,
    addFeeding,
    getFeedingKibbles
  };
};
