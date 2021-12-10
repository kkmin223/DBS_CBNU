// DB connect 부분
// ER_NOT_SUPPORTED_AUTH_MODE오류 발생시 https://developer0809.tistory.com/115 참고할것
const mysql = require("mysql");

const host = "localhost";

let connection = mysql.createConnection({
    host     :  host,
    user     : 'root',
    password : '7233',      //각자 비밀번호 사용
    database : 'dbs_project',
  });

  connection.connect();

  module.exports = connection;