/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope
    let add = (newAllergy, callback) => {
      console.log("*** newAllergy ***", newAllergy);
      let query = 'INSERT INTO allergy (pet_id, kibbles_id, symptom, food) VALUES ($1, $2, $3, $4) RETURNING *';
  
      dbPoolInstance.query(query, newAllergy, (error, queryResult) => {
        if( error ){
  
          // invoke callback function with results after query has executed
          console.log("*** error ***", error);
          callback(error, null);
  
        }else{
  
          // invoke callback function with results after query has executed
  
          if( queryResult.rows.length > 0 ){
            // console.log("*** queryResult.rows ***", queryResult.rows);
            callback(null, queryResult.rows);
  
          }else{
            callback(null, null);
  
          }
        }
      });
    };
  
    let getAll = (callback) => {
  
      let query = 'SELECT * FROM allergy';
  
      dbPoolInstance.query(query, (error, queryResult) => {
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
      getAll,
      add
    };
  };
  