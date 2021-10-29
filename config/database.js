
module.exports = function() {

    let mysql = require('mysql2')
    const dotenv = require('dotenv');

    dotenv.config({ path: './.env' });

    //Establish Connection to the DB
    let connection = mysql.createConnection({
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER,
        password: process.env.DATABASE_PASSWORD,
        port: process.env.DATABASE_PORT,
        database: process.env.DATABASE,
        multipleStatements: true
    });

    //Instantiate the connection
    connection.connect(function(err) {
        if (err) {
            console.log(`connectionRequest Failed ${err.stack}`)
        } else {
            console.log(`DB connectionRequest Successful ${connection.threadId}`)
        }
    });

    //return connection object
    return connection
}