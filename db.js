const Pool = require("pg").Pool;
const pool = new Pool({
  user: process.env.userName,
  password: process.env.password,
  host: process.env.hostName,
  port: process.env.portNo,
  database: process.env.databaseName,
});
module.exports = pool;
