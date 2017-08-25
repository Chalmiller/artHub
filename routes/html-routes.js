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
  // DRAW SHAPES
  app.get("/drawShapes", function(req, res) {
    console.log("requesting drawShapes function");
    res.sendFile(path.join(__dirname, '/../public/drawShapes', 'drawindex.html'));
  });
  // FREQ OSC
  app.get("/freqOsc", function(req, res) {
    console.log("requesting freqOsc function");
    res.sendFile(path.join(__dirname, '/../public/frequencyOscillation', 'oscillateFrequencyIndex.html'));

  });
  // DRAW PATH
  app.get("/drawPath", function(req, res) {
    console.log("requesting drawPath function");
    res.sendFile(path.join(__dirname, '/../public/drawPath', 'drawPath.html'));
  });
  // PARTICLES
  app.get("/particles", function(req, res) {
    console.log("requesting particles function");
    res.sendFile(path.join(__dirname, '/../public/particleSystem', 'particleIndex.html'));
  });

};