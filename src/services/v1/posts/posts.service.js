// Initializes the `v1/posts` service on path `/v1/posts`
const { Posts } = require('./posts.class');
const hooks = require('./posts.hooks');

module.exports = function (app) {
  const options = {
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/v1/posts', new Posts(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('v1/posts');

  service.hooks(hooks);
};
