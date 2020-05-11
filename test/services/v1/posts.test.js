const assert = require('assert');
const app = require('../../../src/app');

describe('\'v1/posts\' service', () => {
  it('registered the service', () => {
    const service = app.service('v1/posts');

    assert.ok(service, 'Registered the service');
  });
});
