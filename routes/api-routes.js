//Not sure if we need to require these here
var express = require("express");

// Import the model to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.


module.exports = function(app) {
  //POST Methods
  app.post("/", function(req, res){
    console.log("Posting img from api-routes")
    console.log(req.body);
    // db.Users.create({
    //   //POST AND CREATE FUNCTIONS
    // }).then(function (dbUsers){
    //   var hbsObject = {
    //     userinfo: dbUsers
    //   };
    //   console.log(hbsObject)
    // })
  });
  //PUT Methods
  app.put("/:id", function(req, res) {
    db.Users.update({
        //CULMN TO UPDATE
      }, {where: {
        //ROW(S) TO UPDATE
      }
    }).then(function(dbUsers) {
      res.redirect("/");
    })
  });
}