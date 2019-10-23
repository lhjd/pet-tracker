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
  const vetControllerCallbacks = require('./controllers/vet')(allModels);
  const weightControllerCallbacks = require('./controllers/weight')(allModels);
  const allergyControllerCallbacks = require('./controllers/allergy')(allModels);
  const kibblesControllerCallbacks = require('./controllers/kibbles')(allModels);

  app.get('/', indexControllerCallbacks.index);
  app.get('/vet', vetControllerCallbacks.index);
  app.get('/weight', weightControllerCallbacks.index);
  app.get('/allergy', allergyControllerCallbacks.index);
  app.get('/kibbles', kibblesControllerCallbacks.index);
};
