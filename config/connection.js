/**
 * Created by rpaulin on 6/5/17.
 */

var mysql = require("mysql");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "burgers_db"
});

// connect to the mysql server and sql database
// connection.connect(function(err) {
//     if (err) throw err;
// });

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;