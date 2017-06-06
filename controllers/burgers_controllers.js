/**
 * Created by rpaulin on 6/5/17.
 */

var burger = require("./../models/burger");

module.exports = function(app) {


    app.get("/", function (req, res) {

        burger.all(function(data) {
            var hbsObject = {
                burgers: data
            };
            console.log(hbsObject.burgers[0]);
            res.render("index",hbsObject);
        });
        //console.log(burger.all);
        //res.render("index", burger);
        //res.render("index", burger.all);
    });


    app.post("/", function(req, res) {
        burger.insertOne([
            "burger_name"
        ], [
            req.body.name
        ], function() {
            res.redirect("/");
        });
    });

    app.post("/:id", function(req, res) {
        var condition = "id = " + req.params.id;

        console.log("condition", condition);

        burger.update({
            devoured: req.body.devoured
        }, condition, function() {
            res.redirect("/");
        });
    });

};