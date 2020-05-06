/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query(`SELECT users.username, messages.text, messages.date, messages.roomname 
                FROM messages 
                INNER JOIN users 
                ON messages.user_id = users.id`
                , (err, result) => {
                  if(err) throw err;
                  console.log('데이터값');
                  console.log(result);
                  callback(result);
      });
    }, // a function which produces all the messages
    post: function (body, callback) {
      db.query(
        `INSERT INTO users (username) VALUES ("${body.username}")`,
        function (error, results) {
          if (error) throw error;

          db.query(
            `INSERT INTO messages (user_id, text, roomname) VALUES ((SELECT id FROM users WHERE username='${body.username}'), '${body.text}', '${body.roomname}')`,
            function (error, results) {
              callback(results);
            }
          );
        }
      );
    }, // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {},
  },
};
