const assert = require('assert');
const app = require('../../../src/app');

describe('\'v1/followers\' service', () => {
  it('registered the service', () => {
    const service = app.service('v1/followers');

    assert.ok(service, 'Registered the service');
  });
});
