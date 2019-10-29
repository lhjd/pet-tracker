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
  app.get('/register', indexControllerCallbacks.register);
  app.post('/register', indexControllerCallbacks.register);
  app.get('/login', indexControllerCallbacks.login);
  app.post('/login', indexControllerCallbacks.login);
  app.get('/logout', indexControllerCallbacks.logout);
  app.post('/pet', indexControllerCallbacks.addPet);

  app.get('/appointment', appointmentControllerCallbacks.index);
  app.post('/appointment', appointmentControllerCallbacks.addAppointmentByUser);
  app.post('/clinic', appointmentControllerCallbacks.addClinicByUser);

  app.get('/weight', weightControllerCallbacks.index);
  app.post('/weight', weightControllerCallbacks.addWeight);
  app.get('/data/weight/:id', weightControllerCallbacks.getWeightData);
  
  app.get('/allergy', allergyControllerCallbacks.index);
  app.post('/allergy', allergyControllerCallbacks.addAllergy);

  app.get('/kibbles', kibblesControllerCallbacks.index);
  app.post('/kibbles', kibblesControllerCallbacks.add);
  app.post('/feeding', kibblesControllerCallbacks.addFeeding);

  app.get('/random/dog', randomControllerCallbacks.index);
};
