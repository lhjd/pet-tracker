module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

  let index = (req, res) => {
      res.render("Weight/Index");
      // db.weight.getAll((error, allWeight) => {
        // res.render('Weight/Index', { allWeight });
      // });
  };

  let add = (req, res) => {
      if (req.method === "GET") {
        res.render('Weight/Add');
      } else if (req.method === "POST") {
        // console.log("*** req.body ***", req.body);
        const pet_id = 1;
        const { date, record } = req.body;
        // console.log("*** date, record ***", date, record);
        const newWeight = [ pet_id, date, record ];

        db.weight.add(newWeight, (error, addedWeight) => {
          // console.log("*** addedWeight ***", addedWeight);
          res.render('Weight/Add', { addedWeight });
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

}
