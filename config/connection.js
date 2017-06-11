/**
 * Created by rpaulin on 6/5/17.
 */

var mysql = require("mysql");


if (process.env.JAWSDB_URL) {

    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

    connection = mysql.createConnection({
        host: "localhost",

        // Your username
        user: "root",

        // Your password
        password: "",
        database: "burgers_db"
    });
}

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;