const mysql = require("mysql2");

const db_connection = mysql
  .createConnection({
    host: "localhdb4free.net", // HOST NAME
    user: "db_dragonadmin", // USER NAME
    database: "db_8technology", // DATABASE NAME
    password: "!k*&8N97KjqwkRP", // DATABASE PASSWORD
  })
  .on("error", (err) => {
    console.log("Failed to connect to Database - ", err);
  });

module.exports = db_connection;