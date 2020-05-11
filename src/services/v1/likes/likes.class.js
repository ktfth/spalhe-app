const { Service } = require('feathers-mongodb');

exports.Likes = class Likes extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('likes');
    });
  }
};
