const mysql = require('mysql')
const connect = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'mydb'
    })

module.exports = connect