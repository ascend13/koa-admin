import mysql from 'mysql2';

const query = () => {
    return new Promise((resolve) => {
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '3344825hb',
            database: 'account'
        })
        
        connection.connect();
        
        connection.query("select * from users where id = 1", function(err, res) {
            if(err) throw err;
            resolve(res);
        });
        
        connection.end();
    })
}

export default query;
