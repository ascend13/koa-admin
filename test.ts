import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '3344825hb',
    database: 'account'
})

connection.connect();

connection.query("select * from users", function(err, res, fields) {
    if(err) throw err;
    console.log(res);
    console.log(fields);
});

connection.end();