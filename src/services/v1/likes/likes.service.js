// Initializes the `v1/likes` service on path `/v1/likes`
const { Likes } = require('./likes.class');
const hooks = require('./likes.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/v1/likes', new Likes(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('v1/likes');

  service.hooks(hooks);
};
