<<<<<<< HEAD
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
=======
'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

sequelize.sync();

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    );
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
>>>>>>> project/master
