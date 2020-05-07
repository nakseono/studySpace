/* eslint-disable no-console */
var {Messages, Users} = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      Messages.sync()
        .then(() => Messages.findAll())
        .then(function(messages) {
          callback(messages);
        })
      // db.query(`SELECT * FROM messages`, (err, result) => {
      //   if(err) throw err;
      //     callback(result);
      // });
    }, // a function which produces all the messages
    post: function (body, callback) {
      console.log(body);
      Messages.sync()
        .then(() => Messages.create(body))
        .then((messages) => {
          callback(messages)
        });
      
      
      
      // db.query(
      //   `INSERT INTO messages (username, text, roomname) VALUES ('${body.username}', '${body.text}', '${body.roomname}')`,
      //   function (error, results) {
      //     if(error) throw error;
      //       callback(results);
      //     }
      //   );
      }
    }, // a function which can be used to insert a message into the database

  users: {
    // Ditto as above.
    get: function (callback) {
      Users.sync()
        .then(() => Users.findAll())
        .then(function(users) {
          callback(users);
        })
    },
    post: function (body, callback) {
      Users.sync()
        .then(() => Users.create(body))
        .then((users) => {
          callback(users)
        });
      }
  },
};
