require("dotenv").config();
const request = require("request");
const sha256 = require("sha256");

module.exports = db => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  const index = (req, res) => {
    if (req.cookies.session_id && req.cookies.user_id) {
      const user_id = req.cookies.user_id;
      const session_id = req.cookies.session_id;
      const hashed_session_id = sha256(process.env.SALT + user_id);
      if (session_id === hashed_session_id) {
        request(
          "https://dog.ceo/api/breeds/image/random",
          (error, response, body) => {
            if (!error && response.statusCode == 200) {
              const result = JSON.parse(body);
              res.render("Index/Index", { random: result });
            } else {
              res.render("Index/Index");
            }
          }
        );
      } else {
        res.redirect("/login");
      }
    } else {
      res.redirect("/login");
    }
  };

  const register = (req, res) => {
    if (req.method === "GET") {
      res.render("Index/Register");
    } else if (req.method === "POST") {
      // console.log("*** POST req.body ***", req.body);
      const newUser = req.body;

      newUser.password = sha256(newUser.password + process.env.SALT);

      db.index.registerUser(newUser, (error, registeredUser) => {
        if (error) {
          console.log("*** error ***", error);
        }
        res.cookie("user_id", registeredUser[0].id);
        const session_id = sha256(process.env.SALT + registeredUser[0].id);
        res.cookie("session_id", session_id);
        res.redirect("/");
      });
    } else {
      res.render("Index/Register");
    }
  };

  const login = (req, res) => {
    if (req.method === "GET") {
      console.log("*** req.cookies ***", req.cookies);
      if (req.cookies.session_id && req.cookies.user_id) {
        const user_id = req.cookies.user_id;
        const session_id = req.cookies.session_id;
        const hashed_session_id = sha256(process.env.SALT + user_id);
        if (session_id === hashed_session_id) {
          res.redirect("/");
        } else {
          res.render("Index/Login");
        }
      } else {
        res.render("Index/Login");
      }
    } else if (req.method === "POST") {
      const existingUser = req.body;
      existingUser.password = sha256(existingUser.password + process.env.SALT);

      db.index.logInUser(existingUser, (error, loggedInUser) => {
        if (error) {
          console.log("*** error ***", error);
        }

        if (loggedInUser) {
          console.log("*** loggedInUser ***", loggedInUser);
          res.cookie("user_id", loggedInUser[0].id);
          const session_id = sha256(process.env.SALT + loggedInUser[0].id);
          res.cookie("session_id", session_id);
          res.redirect("/");
        } else {
          res.render("Index/Login", { msg: "Incorrect password or email" });
        }
      });
    } else {
      res.render("Index/Login");
    }
  };

  const logout = (req, res) => {
    res.clearCookie("session_id");
    res.clearCookie("user_id");
    res.redirect("/login");
  };

  const addPet = (req, res) => {
    if (req.cookies.session_id && req.cookies.user_id) {
      const userId = req.cookies.user_id;
      const sessionId = req.cookies.session_id;
      const hashedSessionId = sha256(process.env.SALT + userId);
      if (sessionId === hashedSessionId) {
        const newPet = req.body;
        console.log("*** newPet ***", newPet);
        db.pet.addPet(userId, newPet, (error, addedPet) => {
          if (error) {
            console.log("*** error in adding pet ***", error);
          } else {
            console.log("*** addedPet ***", addedPet);
            const petId = addedPet[0].id;
            // console.log("*** petId ***", petId);
            // console.log("*** userId ***", userId);
            db.pet.addPetToUser(userId, petId, (error, addedHumanPet) => {
              if (error) {
                console.log("*** error in adding pet to human ***", error);
              } else {
                console.log("*** addedHumanPet ***", addedHumanPet);
                res.redirect("/");
              }
            });
          }
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
    register,
    login,
    logout,
    addPet
  };
};
