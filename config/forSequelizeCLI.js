const { db } = require("./index.js");

module.exports = {
  dialect: "mysql",
  database: db.name,
  username: db.username,
  password: db.password,
  host: db.host,
};
