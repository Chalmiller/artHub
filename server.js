// Requirements
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");
var cloudinary = require('cloudinary');


var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models");
// var cloudinfo = require(__dirname + "./apikey/keys.js")

// Serve static content for the app from the "asset" directory in the application directory.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({type: 'text/html'}));
// app.use(bodyParser.html());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(methodOverride("_method"));


app.use(express.static(__dirname + '/public'));


// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

cloudinary.config({
  cloud_name: 'arthub',
  api_key: '372987164826464',
  api_secret: 'ji3wD9IR2eIc9nWE4kmaR1Cmfr0'
});

// require("./controllers/burger-controller.js")(app);

db.sequelize.sync({force:true}).then(function() {
  app.listen(process.env.PORT || PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});