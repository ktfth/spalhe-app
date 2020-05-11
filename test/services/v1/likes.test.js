const assert = require('assert');
const app = require('../../../src/app');

describe('\'v1/likes\' service', () => {
  it('registered the service', () => {
    const service = app.service('v1/likes');

    assert.ok(service, 'Registered the service');
  });
});
