/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
const moment = require("moment");

module.exports = dbPoolInstance => {
  // `dbPoolInstance` is accessible within this function scope
  const getAllAppointmentsByUser = (userId, callback) => {
    const query = `SELECT 
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
    const parameters = [userId];

    dbPoolInstance.query(query, parameters, (error, queryResult) => {
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

  const addClinicByUser = (userId, newClinic, callback) => {
    const { name, address, phone } = newClinic;
    const query = `INSERT INTO clinic (human_id, name, address, phone) VALUES ($1, $2, $3, $4) RETURNING *`;
    const parameters = [userId, name, address, phone];
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

  const getClinicByUser = (userId, callback) => {
    const query = `SELECT * FROM clinic WHERE human_id = $1`;
    const parameter = [userId];
    dbPoolInstance.query(query, parameter, (error, queryResult) => {
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

  const addAppointmentByUser = (userId, newAppointment, callback) => {
    const query = `INSERT INTO appointment (clinic_id, pet_id, date, time) VALUES ($1, $2, $3, $4) RETURNING *`;

    const parameters = [
      newAppointment.clinic_id,
      newAppointment.pet_id,
      newAppointment.date,
      newAppointment.formattedTime
    ];

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
    getAllAppointmentsByUser,
    addClinicByUser,
    getClinicByUser,
    addAppointmentByUser
  };
};
