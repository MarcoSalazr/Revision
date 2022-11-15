const mysql = require('mysql');
const mysqlConection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: '3306',
    database: 'prograweb'
});
mysqlConection.connect((err) => {
    if (err = null) {
        console.log(err);
    } else {
        console.log('DB conectada')
    }
})

module.exports = mysqlConection;