/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {

    // `dbPoolInstance` is accessible within this function scope
  
    let getAll = (userId, callback) => {
  
      // let query = 'SELECT * FROM  kibbles';
      let query = `SELECT 
      human.username, pet.name,
      kibbles.brand, kibbles.description, kibbles.weight, kibbles.price,
      kibbles.date_purchased, kibbles.date_opened, kibbles.date_expiry
      FROM 
      kibbles INNER JOIN feeding_kibbles
      ON kibbles.id = feeding_kibbles.kibbles_id
      INNER JOIN feeding 
      ON feeding.id = feeding_kibbles.feeding_id
      INNER JOIN pet 
      ON pet.id = feeding.pet_id
      INNER JOIN human_pet
      ON pet.id = human_pet.pet_id
      INNER JOIN human
      ON human.id = human_pet.human_id
      WHERE human.id = 1`;

      console.log("*** query ***", query);
  
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
    };
  };
  