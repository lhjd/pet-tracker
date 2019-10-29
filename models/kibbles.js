/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = dbPoolInstance => {
  // `dbPoolInstance` is accessible within this function scope

  const getAll = (userId, callback) => {
    // let query = 'SELECT * FROM  kibbles';
    let query = `SELECT * FROM kibbles WHERE human_id = $1`;

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
      pet_id, daily_frequency, portion_weight, plan_name
    } = req.body;
    const query = `INSERT INTO feeding 
                  (pet_id, daily_frequency, portion_weight, plan_name) 
                  VALUES ($1, $2, $3, $4) RETURNING *`;
    const data = [pet_id, daily_frequency, portion_weight, plan_name];

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
  const getFeedingKibbles = (userId, callback) => {
    const query = `SELECT * FROM feeding
                  INNER JOIN pet 
                  ON feeding.pet_id = pet.id
                  INNER JOIN human_pet
                  ON human_pet.pet_id = pet.id 
                  INNER JOIN feeding_kibbles
                  ON feeding_kibbles.feeding_id = feeding.id
                  INNER JOIN kibbles
                  ON feeding_kibbles.kibbles_id = kibbles.id
                  WHERE human_pet.human_id = $1`;
    const data = [userId];

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
  const addFeedingKibbles = (kibblesId, feedingId, callback) => {
    const query = `INSERT INTO feeding_kibbles (kibbles_id, feeding_id) VALUES($1, $2) RETURNING *`;

    dbPoolInstance.query(query, [kibblesId, feedingId], (error, queryResult) => {
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
    addFeeding,
    getFeedingKibbles,
    addFeedingKibbles
  };
};
