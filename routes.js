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
  const randomControllerCallbacks = require('./controllers/random')(allModels);

  app.get('/', indexControllerCallbacks.index);

  app.get('/appointment', appointmentControllerCallbacks.index);
  app.post('/appointment', appointmentControllerCallbacks.addAppointmentByUser);
  app.post('/clinic', appointmentControllerCallbacks.addClinicByUser);

  app.get('/weight', weightControllerCallbacks.index);
  app.get('/data/weight/all', weightControllerCallbacks.all);
  // app.get('/weight/add', weightControllerCallbacks.add);
  app.post('/weight', weightControllerCallbacks.addWeight);
  
  app.get('/allergy', allergyControllerCallbacks.index);
  app.get('/allergy/add', allergyControllerCallbacks.add);
  app.post('/allergy', allergyControllerCallbacks.add);
  app.get('/kibbles', kibblesControllerCallbacks.index);
  app.post('/kibbles', kibblesControllerCallbacks.add);
  app.post('/feeding', kibblesControllerCallbacks.addFeeding);
  app.get('/random/dog', randomControllerCallbacks.index)
};
