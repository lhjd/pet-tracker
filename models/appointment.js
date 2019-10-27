/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const moment = require("moment");

module.exports = dbPoolInstance => {
  // `dbPoolInstance` is accessible within this function scope
  const add = (newAppointment, callback) => {
    let query =
      "INSERT INTO appointment (pet_id, clinic_id, date, time) VALUES ($1, $2, $3, $4) RETURNING *";

    dbPoolInstance.query(query, newAppointment, (error, queryResult) => {
      if (error) {
        // invoke callback function with results after query has executed
        console.log("*** error ***", error);
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed

        if (queryResult.rows.length > 0) {
          // console.log("*** queryResult.rows ***", queryResult.rows);
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  }

  const getAllAppointments = (userId, callback) => {
    // let query = 'SELECT * FROM appointment INNER JOIN clinic ON appointment.clinic_id = clinic.id WHERE clinic.pet_id = $1';
    let query = `SELECT 
                  pet.name AS pet_name, 
                  clinic.name AS clinic_name, clinic.address, clinic.phone,
                  appointment.date, appointment.time
                  FROM 
                  appointment INNER JOIN clinic 
                  ON appointment.clinic_id = clinic.id
                  INNER JOIN pet
                  ON appointment.pet_id = pet.id
                  WHERE appointment.pet_id 
                  IN 
                  (SELECT pet_id FROM 
                  pet INNER JOIN human_pet 
                  ON pet.id = human_pet.pet_id 
                  WHERE human_pet.human_id = $1)`;

    dbPoolInstance.query(query, [userId], (error, queryResult) => {
      if (error) {
        console.log("*** error ***", error);
        // invoke callback function with results after query has executed
        callback(error, null);
      } else {
        // invoke callback function with results after query has executed

        if (queryResult.rows.length > 0) {
          // console.log("*** queryResult.rows ***", queryResult.rows);
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    });
  }

  const addClinic = (userId, newClinic, callback) => {
    const { name, address, phone } = newClinic;
    const query = `INSERT INTO clinic (human_id, name, address, phone) VALUES ($1, $2, $3, $4) RETURNING *`;

    dbPoolInstance.query(
      query,
      [userId, name, address, phone],
      (error, queryResult) => {
        if (error) {
          console.log("*** error ***", error);
          callback(error, null);
        } else {
          if (queryResult.rows.length > 0) {
            callback(null, queryResult.rows);
          } else {
            callback(null, null);
          }
        }
      }
    );
  }

  const getClinicByUser = (userId, callback) => {

    const query = `SELECT * FROM clinic WHERE human_id = $1`

    dbPoolInstance.query(query, [userId], (error, queryResult) => {
      if (error) {
        console.log("*** error ***", error);
        callback(error, null);
      } else {
        if (queryResult.rows.length > 0) {
          callback(null, queryResult.rows);
        } else {
          callback(null, null);
        }
      }
    })
  }

  const addAppointment = (userId, newAppointment, callback) => {

    const query = `INSERT INTO appointment (clinic_id, pet_id, date, time) VALUES ($1, $2, $3, $4) RETURNING *`;

    const parameters = [
      newAppointment.clinic_id,
      newAppointment.pet_id,
      newAppointment.date,
      newAppointment.formattedTime
    ]

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


  }


  return {
    getAllAppointments,
    add,
    addClinic,
    getClinicByUser,
    addAppointment
  };
};
