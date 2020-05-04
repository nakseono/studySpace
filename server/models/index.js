/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      db.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
        if (error) throw error;
      // console.log('The solution is: ', results[0].solution);
      console.log("ok");
      });
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

