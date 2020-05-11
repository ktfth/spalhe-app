// Initializes the `v1/sessions` service on path `/v1/sessions`
const { Sessions } = require('./sessions.class');
const hooks = require('./sessions.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/v1/sessions', new Sessions(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('v1/sessions');

  service.hooks(hooks);
};
