import Database from "better-sqlite3";

const express = require("express");
const app = express();
const port = 3000;

//////////// DB ////////////
const db = new Database("dates.db");
db.pragma("journal_mode = WAL");

//////////// ROUTES ////////////
app.get("/", (req, res) => {
  res.json({ message: "OK" });
});

app.get("/get_dates", (req, res) => {
  const row = db.prepare("SELECT * FROM dates");
  console.log(row);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
