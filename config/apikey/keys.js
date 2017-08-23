//Cloud Storage API
var cloudinfo = {
  cloud_name: 'arthub',
  api_key: '372987164826464',
  api_secret: 'a676b67565c6767a6767d6767f676fe1'
};

//SQL Connection info (only for local host)
var sqlConnect = {
    port: 3306,
    host: "localhost",
    user: "root",
    password: "admin",
    database: "Users_DB"
};

//Export 'em.
module.exports = cloudinfo;
module.exports = sqlConnect;