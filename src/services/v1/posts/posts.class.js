const { Service } = require('feathers-mongodb');

exports.Posts = class Posts extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('posts');
    });
  }
};
