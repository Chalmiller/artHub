var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.

module.exports = function(app) {
  app.post("/", function(req, res){
    console.log("---------req.body-----")
    console.log(req.body);
    db.Burger.create({
      burger_name : req.body.newBurger
    }).then(function (dbBurgers){
      var hbsObject = {
        burgers: dbBurgers
      };
      console.log(hbsObject)
      res.redirect("/");
    })
  });
  app.put("/:id", function(req, res) {
    db.Burger.update({
        devoured : true
      }, {where: {
        id : req.params.id
      }
    }).then(function(dbBurgers) {
      res.redirect("/");
    })
  })
}