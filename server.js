const express = require("express");
const app = express();
const port = 3000;

// Route to get marked dates from sqlite3 db
app.get("/get_dates", (req, res) => {
  res.send("Giving you dates");
});

app.listen(port, () => {
  console.log("Test");
});
