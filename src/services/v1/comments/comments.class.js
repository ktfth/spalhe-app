const { Service } = require('feathers-mongodb');

exports.Comments = class Comments extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('comments');
    });
  }
};
