const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    database: 'receitas_db',
    user: 'root',
    password: '',
});

connection.connect(function (err) {
    if (err) {
        console.error('Error: ' + err.stack);
        return;
    }
    console.log('Conectado ao banco de dados');
});

module.exports = connection;
