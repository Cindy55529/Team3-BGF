const mysql = require('mysql');
require('dotenv').config();
const Promise = require('bluebird');//故意用大寫Promise 表示要取代原本Promise之意->從此無法Promise

//Pool寫法
let connection = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    //設定預設值
    connectionLimit:process.env.CONNECTION_LIMIT || 10,
});

connection = Promise.promisifyAll(connection);//從此connection裡的函式都會有promise
module.exports = connection;