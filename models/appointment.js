/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope
    let add = (newAppointment, callback) => {

      let query = 'INSERT INTO appointment (pet_id, clinic_id, date, time) VALUES ($1, $2, $3, $4) RETURNING *';
  
      dbPoolInstance.query(query, newAppointment, (error, queryResult) => {
        if( error ){
  
          // invoke callback function with results after query has executed
          console.log("*** error ***", error);
          callback(error, null);
  
        }else{
  
          // invoke callback function with results after query has executed
  
          if( queryResult.rows.length > 0 ){
            console.log("*** queryResult.rows ***", queryResult.rows);
            callback(null, queryResult.rows);
  
          }else{
            callback(null, null);
  
          }
        }
      });
    };
  
    let getAllAppointments = (petId, callback) => {
  
      let query = 'SELECT * FROM appointment INNER JOIN clinic ON appointment.clinic_id = clinic.id WHERE pet_id = $1';
  
      dbPoolInstance.query(query, [petId], (error, queryResult) => {
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
      getAllAppointments,
      add
    };
  };
  