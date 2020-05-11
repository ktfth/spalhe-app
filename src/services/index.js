const users = require('./users/users.service.js');
const v1Sessions = require('./v1/sessions/sessions.service.js');
const v1Followers = require('./v1/followers/followers.service.js');
const v1Posts = require('./v1/posts/posts.service.js');
const v1Comments = require('./v1/comments/comments.service.js');
const v1Likes = require('./v1/likes/likes.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(v1Sessions);
  app.configure(v1Followers);
  app.configure(v1Posts);
  app.configure(v1Comments);
  app.configure(v1Likes);
};
