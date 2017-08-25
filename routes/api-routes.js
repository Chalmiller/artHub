//Not sure if we need to require these here
var express = require("express");

// Import the model to use its database functions.
var db = require("../models");
var cloudinary = require('cloudinary');


// Create all our routes and set up logic within those routes where required.
var myURI = "data:image/jpeg;base64,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";

module.exports = function(app) {
  //POST Methods
  app.post("/", function(req, res){
    console.log("Posting img from api-routes")
    // console.log(req.body);
    cloudinary.v2.uploader.upload(myURI, function(error, result) {
      if(!error) {
        console.log(result);
        console.log(result.secure_url);
        db.Users.create({
          // imgURL: 
        })
      } else {
        console.log(error);
      }
    });
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