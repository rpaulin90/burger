/**
 * Created by rpaulin on 6/5/17.
 */

var orm = require("./../config/orm");

var burger = {

    all: function(cb) {
        orm.selectAll( function(res){
            cb(res);
        });
    },

    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            cb(res);
        });
    },

    update: function(objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    }

};

module.exports = burger;

