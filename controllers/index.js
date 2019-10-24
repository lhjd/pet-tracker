const request = require("request");

module.exports = db => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let indexControllerCallback = (req, res) => {
    request("https://dog.ceo/api/breeds/image/random", (error, response, body) => {
      if (!error && response.statusCode == 200) {
        const result = JSON.parse(body);
        // res.send(result);
        res.render("Index/Index", {random: result});
      } else {
        res.render("Index/Index")
      }
    });
  };

  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    index: indexControllerCallback
  };
};
