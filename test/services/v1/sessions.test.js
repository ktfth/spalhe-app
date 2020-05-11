const assert = require('assert');
const app = require('../../../src/app');

describe('\'v1/sessions\' service', () => {
  it('registered the service', () => {
    const service = app.service('v1/sessions');

    assert.ok(service, 'Registered the service');
  });
});
