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
  const appointmentControllerCallbacks = require('./controllers/appointment')(allModels);
  const weightControllerCallbacks = require('./controllers/weight')(allModels);
  const allergyControllerCallbacks = require('./controllers/allergy')(allModels);
  const kibblesControllerCallbacks = require('./controllers/kibbles')(allModels);

  app.get('/', indexControllerCallbacks.index);
  app.get('/appointment', appointmentControllerCallbacks.index);
  app.get('/appointment/add', appointmentControllerCallbacks.add);
  app.post('/appointment', appointmentControllerCallbacks.add);
  app.get('/weight', weightControllerCallbacks.index);
  app.get('/data/weight/all', weightControllerCallbacks.all);
  app.get('/weight/add', weightControllerCallbacks.add);
  app.post('/weight', weightControllerCallbacks.add);
  app.get('/allergy', allergyControllerCallbacks.index);
  app.get('/allergy/add', allergyControllerCallbacks.add);
  app.post('/allergy', allergyControllerCallbacks.add);
  app.get('/kibbles', kibblesControllerCallbacks.index);
};
