// var express = require("express");

// var router = express.Router();

// Import the model to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.

module.exports = function(app) {

  app.get("/", function (req, res) {
    console.log("html-routes is running: / (get hb object)")
    // console.log(db.Burger);
    db.Burger.findAll({}).then(function(dbBurgers){
      var hbsObject = {burgers : dbBurgers};
      res.render("index", hbsObject);
    })
  })
}