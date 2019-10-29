/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = dbPoolInstance => {
  // `dbPoolInstance` is accessible within this function scope

  let getPetByUserId = (userId, callback) => {
    let query =
      "SELECT * FROM pet INNER JOIN human_pet ON human_pet.pet_id = pet.id WHERE human_pet.human_id = $1";
    // console.log("*** query ***", query);

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

  const addPet = (userId, newPet, callback) => {
    const { name, dob, breed } = newPet;

    const query = `INSERT INTO pet (name, dob, breed) VALUES($1, $2, $3) RETURNING *`;

    const parameters = [name, dob, breed];

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

  const addPetToUser = (userId, petId, callback) => {
    console.log("*** petId ***", petId);
    console.log("*** userId ***", userId);

    const query = `INSERT INTO human_pet (human_id, pet_id) VALUES ($1, $2) RETURNING *`;

    const parameters = [userId, petId];

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

  const getSinglePet = (petId, userId, callback) => {
    let query = `SELECT * FROM pet 
                  WHERE pet.id = $1
                  AND pet.id IN 
                  (SELECT pet_id FROM human_pet WHERE human_id = $2)`;
    const parameters = [+petId, +userId];
    console.log("*** parameters ***", parameters);

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
    getPetByUserId,
    addPet,
    addPetToUser,
    getSinglePet
  };
};
