/* eslint-disable no-console */
var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      console.log("getMessage");

      res.status(200).send(models.messages.get());
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log("postMessage");

      models.messages.post(req.body);
      res.status(200).send();
    } // a function which handles posting a message to the database
  },

  users: {
    get: function (req, res) {
      console.log("getUsers");

      res.status(200).send(models.users.get());
    }, // a function which handles a get request for all users
    post: function (req, res) {
      console.log("postUsers");

      models.users.post(req.body);
      res.status(200).send();
    } // a function which handles posting a user to the database
  }
};

