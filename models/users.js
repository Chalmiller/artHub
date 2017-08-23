// Dependencies
// =============================================================

// // This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var users = function (sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    imgURL: Sequelize.STRING,
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  },{
    timestamps: true
  })
  return Users;
}

// Export the user model for other files to use

module.exports = users;