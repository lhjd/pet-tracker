module.exports = (app, allModels) => {


  /*
   *  =========================================
   *  =========================================
   *  =========================================
   *  =========================================
   *    ALL ROUTES FOR ALL CONTROLLERS
   *  =========================================
   *  =========================================
   *  =========================================
   */

  // require the controller
  const indexControllerCallbacks = require('./controllers/index')(allModels);
  const appointmentControllerCallbacks = require('./controllers/appointment/index')(allModels);
  const weightControllerCallbacks = require('./controllers/weight/index')(allModels);
  const allergyControllerCallbacks = require('./controllers/allergy/index')(allModels);
  const kibblesControllerCallbacks = require('./controllers/kibbles/index')(allModels);

  app.get('/', indexControllerCallbacks.index);
  app.get('/appointment', appointmentControllerCallbacks.index);
  app.get('/weight', weightControllerCallbacks.index);
  app.get('/allergy', allergyControllerCallbacks.index);
  app.get('/kibbles', kibblesControllerCallbacks.index);
};
