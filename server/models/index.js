/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      db.query('SELECT * FROM messages', function (error, results) {
        if (error) throw error;
        console.log('The solution is: ', results);
        callback(results);
      });

      // results에서 담긴 user_id로 쿼리를 한 번 더 보내서 users 테이블에서 username 가져와서 데이터를 조합한다.
      // callback(그 데이터);
    }, // a function which produces all the messages
    post: function (body, callback) {
      //       INSERT INTO user (name)
      //       VALUES ('John Smith');
      //  INSERT INTO user_details (id, weight, height)
      //       VALUES ((SELECT id FROM user WHERE name='John Smith'), 83, 185);
      // SELECT user가 존재하는지 찾기 없으면 1. -> 2. 실행. 있으면 2. 실행

      db.query(
        `SELECT id FROM users WHERE username='${body.username}'`,
        function (err, results) {
          if (results.length === 0) {
            // 값이 없을 때
            db.query(
              `INSERT INTO users (username) VALUES ("${body.username}")`,
              function (error, results) {
                if (error) throw error;

                db.query(
                  `INSERT INTO messages (user_id, text, roomname) VALUES ((SELECT id FROM users WHERE username='${body.username}'), ${body.text}, ${body.roomname})`,
                  function (error, results) {
                    callback(results);
                  }
                );
              }
            );
          } else {
            db.query(
              `INSERT INTO messages (user_id, text, roomname) VALUES ((SELECT id FROM users WHERE username='${body.username}'), ${body.text}, ${body.roomname})`,
              function (error, results) {
                callback(results);
              }
            );
          }
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
