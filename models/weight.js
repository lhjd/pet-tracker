/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let add = (newWeight, callback) => {

    let query = 'INSERT INTO weight (pet_id, date, record) VALUES ($1, $2, $3) RETURNING *';

    dbPoolInstance.query(query, newWeight, (error, queryResult) => {
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

  return {
    add,
  };
};
