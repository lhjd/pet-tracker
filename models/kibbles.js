/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = dbPoolInstance => {
  // `dbPoolInstance` is accessible within this function scope

  const getAll = (userId, callback) => {
    // let query = 'SELECT * FROM  kibbles';
    let query = `SELECT 
      kibbles.brand, kibbles.description, kibbles.weight, kibbles.price,
      kibbles.date_purchased, kibbles.date_opened, kibbles.date_expiry
      FROM 
      kibbles 
      WHERE human_id = $1`;

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
  }

  const add = (req, userId, callback) => {
    const {
      brand, description, weight, price, date_purchased, date_opened, date_expiry
    } = req.body;
    const query = `INSERT INTO kibbles 
                  (human_id, brand, description, weight, price, date_purchased, date_opened, date_expiry) 
                  VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
    const data = [userId, brand, description, weight, price, date_purchased, date_opened, date_expiry];

    dbPoolInstance.query(query, data, (error, queryResult) => {
      if (error) {
        console.log("*** error in query ***", error);
        callback(error, null);
      } else {
        if (queryResult.rows.length > 0) {
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  }
  const addFeeding = (req, userId, callback) => {
    const {
      pet_id, daily_frequency, portion_weight
    } = req.body;
    const query = `INSERT INTO feeding 
                  (pet_id, daily_frequency, portion_weight) 
                  VALUES ($1, $2, $3) RETURNING *`;
    const data = [pet_id, daily_frequency, portion_weight];

    dbPoolInstance.query(query, data, (error, queryResult) => {
      if (error) {
        console.log("*** error in query ***", error);
        callback(error, null);
      } else {
        if (queryResult.rows.length > 0) {
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  }

  return {
    getAll,
    add,
    addFeeding
  };
};
