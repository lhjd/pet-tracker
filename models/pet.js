/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope
  
    let getPetByUserId = (userId, callback) => {
  
      let query = 'SELECT * FROM pet INNER JOIN human_pet ON human_pet.pet_id = pet.id WHERE human_pet.human_id = $1';
    console.log("*** query ***", query);

      dbPoolInstance.query(query, [userId], (error, queryResult) => {
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
      getPetByUserId,
    };
  };
  