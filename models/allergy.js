/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope
    const addAllergy = (newAllergy, callback) => {
      const { pet_id, symptom, food } = newAllergy;

      let query = 'INSERT INTO allergy (pet_id, symptom, food) VALUES ($1, $2, $3) RETURNING *';
      
      const parameters = [ pet_id, symptom, food];

      dbPoolInstance.query(query, parameters, (error, queryResult) => {
        if( error ){
          // invoke callback function with results after query has executed
          console.log("*** error ***", error);
          callback(error, null);
        }else{
          // invoke callback function with results after query has executed  
          if( queryResult.rows.length > 0 ){
            callback(null, queryResult.rows);
          }else{
            callback(null, null);  
          }
        }
      });
    };
  
    const getAllAllergies = (userId, callback) => {
      const query = `SELECT
                  pet.name AS pet_name,
                  allergy.food, allergy.symptom
                  FROM 
                  allergy INNER JOIN pet 
                  ON pet.id = allergy.pet_id
                  WHERE allergy.pet_id
                  IN 
                  (SELECT pet_id FROM
                  pet INNER JOIN human_pet 
                  ON pet.id = human_pet.pet_id 
                  WHERE human_pet.human_id = $1)`;

      const parameters = [userId];

      dbPoolInstance.query(query, parameters, (error, queryResult) => {
        if( error ){
          // invoke callback function with results after query has executed
          callback(error, null);
        }else{
          // invoke callback function with results after query has executed
          if( queryResult.rows.length > 0 ){
            callback(null, queryResult.rows);
          }else{
            callback(null, null);
          }
        }
      });
    };
  
    return {
      getAllAllergies,
      addAllergy
    };
  };
  