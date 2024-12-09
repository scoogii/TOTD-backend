const express = require("express");
const app = express();
const port = 3000;

//////////// DB ////////////
const db = require("./db");

//////////// ROUTES ////////////
app.get("/", (req, res) => {
  res.json({ message: "OK" });
});

app.get("/get_dates", (req, res) => {
  db.all("SELECT * FROM dates", (error, rows) => {
    console.log(rows);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
