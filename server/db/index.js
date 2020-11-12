/* eslint-disable no-console */
// const mysql = require('mysql');
const Sequelize = require('sequelize');

// process.env로 시작하는 모든 변수들은 환경 변수(environmental variables)입니다.
// 환경 변수는 터미널에서 다음 명령을 이용하여 설정할 수 있습니다.
// export DATABASE_SPRINT_PASSWORD=your_password_here
const password = process.env.DATABASE_SPRINT_PASSWORD;

const host = 'localhost';

// 데이터베이스 연결을 만들고, 연결 객체를 export 하세요.
// 연결에 필요한 몇가지 정보가 있습니다. 먼저 user는 root, 패스워드는 위 password 변수를 사용하세요.
// 그리고 실제로 연결할 데이터베이스의 위치(host)는 host 변수를 사용하세요.
// 데이터베이스 이름(database)은 "chat"로 지정하세요.

const sequelize = new Sequelize(
  'chat',
  'root',
  password,
  {
    host : host,
    dialect : 'mysql'
  }
);

let testConnection = async () => {
  try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}}

testConnection();


var Messages = sequelize.define('messages', {
  username: Sequelize.STRING,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
}, {
  timestamps: false
});

var Users = sequelize.define('users', {
  username: Sequelize.STRING
}, {
  timestamps: false
});
// var connection = mysql.createConnection({
//   host: host,
//   user: 'root',
//   password: password,
//   database: 'chat',
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//     return;
//   }

//   console.log(password);
//   console.log('connected as id ' + connection.threadId);
// });

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });

// connection.end();

module.exports = {sequelize, Messages, Users};
