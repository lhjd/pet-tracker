/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let addWeight = (newWeight, callback) => {
    const { pet_id, date, record } = newWeight;

    const query = 'INSERT INTO weight (pet_id, date, record) VALUES ($1, $2, $3) RETURNING *';

    const parameters = [pet_id, date, record];

    dbPoolInstance.query(query, parameters, (error, queryResult) => {
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

  let getAllWeightsByPet = (petId, callback) => {

    const query = `SELECT * FROM weight WHERE pet_id = $1`;
    const parameters = [petId];

    dbPoolInstance.query(query, parameters, (error, queryResult) => {
      if( error ){
        // invoke callback function with results after query has executed
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
    addWeight,
    getAllWeightsByPet
  };
};
