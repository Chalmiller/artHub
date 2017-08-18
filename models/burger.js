// Dependencies
// =============================================================

// // This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var burger = function (sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: Sequelize.STRING,
    devoured:
    {
      type: Sequelize.BOOLEAN,
      defaultValue: false
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  },{
    timestamps: true
  })
  // Burger.sync();
  return Burger;
}

// Export the burger model for other files to use

module.exports = burger;