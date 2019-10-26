/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = dbPoolInstance => {
  // `dbPoolInstance` is accessible within this function scope

  let getAll = (userId, callback) => {
    // let query = 'SELECT * FROM  kibbles';
    let query = `SELECT 
      kibbles.brand, kibbles.description, kibbles.weight, kibbles.price,
      kibbles.date_purchased, kibbles.date_opened, kibbles.date_expiry
      FROM 
      kibbles 
      WHERE human_id = $1`;

    console.log("*** query ***", query);

    dbPoolInstance.query(query, [userId], (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed

        if (queryResult.rows.length > 0) {
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };

  return {
    getAll
  };
};
