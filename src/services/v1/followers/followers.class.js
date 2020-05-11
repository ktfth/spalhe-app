const { Service } = require('feathers-mongodb');

exports.Followers = class Followers extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('followers');
    });
  }
};
