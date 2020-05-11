const { Service } = require('feathers-mongodb');

exports.Sessions = class Sessions extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('sessions');
    });
  }
};
