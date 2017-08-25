var express = require("express");
var router = express.Router();
var path = require('path');

// Import the model to use its database functions.
var db = require("../models");

// Create all our routes and set up logic within those routes where required.

module.exports = function(app) {

  app.get("/", function (req, res) {
    console.log("html-routes is running: / (get hb object)");
    //Use sequelize to get User info (should be changed to art once we get the DB figured)
    db.Users.findAll({}).then(function(dbUsers){
      var hbsObject = {userinfo : dbUsers};
      console.log("handlebars object - ");
      console.log(hbsObject.userinfo);
      //Grabs index.handlebars in /views. Edit HTML there.
      res.render("index", hbsObject);
    })
  });
  app.get("/drawShapes", function(req, res) {
    console.log("requesting drawShapes function");
    res.sendFile(path.join(__dirname, '/../public/drawShapes', 'drawindex.html'));
    console.log("-------REQ------");
    // console.log(req);
    console.log("-------RES------");
    console.log(res);
  });
};