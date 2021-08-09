const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'USER_NAME',
    password: 'myPassword',
    database: 'NOME_BANCO' });

module.exports = connection;
