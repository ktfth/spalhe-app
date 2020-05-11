// Initializes the `v1/comments` service on path `/v1/comments`
const { Comments } = require('./comments.class');
const hooks = require('./comments.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/v1/comments', new Comments(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('v1/comments');

  service.hooks(hooks);
};
