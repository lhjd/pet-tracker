module.exports = db => {
  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let all = (req, res) => {
    // res.render("Weight/Index");
    // set dummy petId here, to be retrieved from req.cookie.pet_id
    let petId = 1;
    db.weight.getAll(petId, (error, allWeight) => {
      if (allWeight) {
        const data = allWeight.map(weight => ({x: weight.date, y: weight.record}));
        res.send({ data });
      } else {
        res.send("");
      }

    });
  };

  let index = (req, res) => {
    // res.render("Weight/Index");
    // set dummy petId here, to be retrieved from req.cookie.pet_id
    let petId = 1;
    db.weight.getAll(petId, (error, allWeight) => {
      res.render("Weight/Index", { allWeight });
    });
  };

  let add = (req, res) => {
    if (req.method === "GET") {
      res.render("Weight/Add");
    } else if (req.method === "POST") {
      // console.log("*** req.body ***", req.body);
      const pet_id = 1;
      const { date, record } = req.body;
      // console.log("*** date, record ***", date, record);
      const newWeight = [pet_id, date, record];

      db.weight.add(newWeight, (error, addedWeight) => {
        // console.log("*** addedWeight ***", addedWeight);
        res.render("Weight/Add", { addedWeight });
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
    add,
    all
  };
};
