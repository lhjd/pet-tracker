/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = dbPoolInstance => {
  // `dbPoolInstance` is accessible within this function scope

  const getAll = callback => {
    let query = "SELECT * FROM index";

    dbPoolInstance.query(query, (error, queryResult) => {
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

  const registerUser = (newUser, callback) => {
    const query = `INSERT INTO human (email, password) VALUES ($1, $2) RETURNING *`;

    const parameters = [newUser.email, newUser.password];

    dbPoolInstance.query(query, parameters, (error, queryResult) => {
      if (error) {
        callback(error, null);
      } else {
        if (queryResult.rows.length > 0) {
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };

  const logInUser = (existingUser, callback) => {
    const { email, password } = existingUser;

    const query = `SELECT * FROM human WHERE email = $1 AND password = $2`;

    const parameters = [email, password];

    dbPoolInstance.query(query, parameters, (error, queryResult) => {
      if (error) {
        callback(error, null);
      } else {
        if (queryResult.rows.length > 0) {
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };

  const checkIfEmailExists = (email, callback) => {
    let query = `SELECT * FROM human WHERE email = $1`;

    const parameters = [email];

    dbPoolInstance.query(query, parameters, (error, queryResult) => {
      if (error) {
        callback(error, null);
      } else {
        if (queryResult.rows.length > 0) {
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  };

  return {
    getAll,
    registerUser,
    logInUser,
    checkIfEmailExists
  };
};
