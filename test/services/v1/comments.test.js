const assert = require('assert');
const app = require('../../../src/app');

describe('\'v1/comments\' service', () => {
  it('registered the service', () => {
    const service = app.service('v1/comments');

    assert.ok(service, 'Registered the service');
  });
});
