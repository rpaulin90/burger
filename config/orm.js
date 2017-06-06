/**
 * Created by rpaulin on 6/5/17.
 */

var connection = require("./connection");

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

var orm = {

    selectAll: function(cb){

        connection.query("SELECT * FROM burgers", function(err, results) {
            if (err) throw err;
            cb(results);

            //return results[0];
//console.log(results);
        });

    },

    insertOne: function(table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";

        console.log(queryString);

        connection.query(queryString, vals, function(err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });
    },

    update: function(table, objColVals, condition, cb) {
        var queryString = "UPDATE " + table;

        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        console.log(queryString);
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }

};

module.exports = orm;

// exports.insertOne = function(burgerName){
//
//     connection.query("INSERT INTO burgers SET ?", {
//         burger_name: burgerName,
//         devoured: FALSE,
//         date: current_timestamp
//     }, function(err) {
//         if (err) throw err;
//     });
//
// };
//
// exports.updateOne = function(burgerEatenId){
//
//     connection.query("UPDATE burgers SET ? WHERE ?", [{
//         devoured: TRUE
//     }, {
//         id: burgerEatenId
//     }], function(error) {
//         if (error) throw err;
//     });
//
// };