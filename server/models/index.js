var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query(`SELECT * FROM messages`, (err, result) => {
        if(err) throw err;
          callback(result);
      });
    }, // a function which produces all the messages
    post: function (body, callback) {
      db.query(
        `INSERT INTO messages (username, text, roomname) VALUES ('${body.username}', '${body.text}', '${body.roomname}')`,
        function (error, results) {
          if(error) throw error;
            callback(results);
          }
        );
      }
    }, // a function which can be used to insert a message into the database

  users: {
    // Ditto as above.
    get: function (callback) {
      db.query(`SELECT users.username FROM users`, (err, result) => {
        if(err) throw err;
        callback(result)
      })
    },
    post: function (body, callback) {
      db.query(
        `INSERT INTO users (username) VALUES ("${body.username}")`,
        function (error, results) {
          if(error) throw error;
            callback(results);
        }
      );
    },
  },
};
