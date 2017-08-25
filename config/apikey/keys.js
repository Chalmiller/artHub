//Cloud Storage API

var keys = {
  cloudinfo: {
    cloud_name: 'arthub',
    api_key: '372987164826464',
    api_secret: 'ji3wD9IR2eIc9nWE4kmaR1Cmfr0'
  },
  sqlConnect: {
    port: 3306,
    host: "localhost",
    user: "root",
    password: "admin",
    database: "Users_DB"
  }
}

//SQL Connection info (only for local host)
var sqlConnect = {
    port: 3306,
    host: "localhost",
    user: "root",
    password: "admin",
    database: "Users_DB"
};

//Export 'em.
module.exports = keys;
