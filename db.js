const sqlite3 = require("sqlite3");
const db = new sqlite3.Database("/var/data/days.db");

module.exports = db;
