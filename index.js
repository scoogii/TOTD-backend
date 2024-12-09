const express = require("express");
const bodyParser = require("body-parser");
const days = require("./days");

const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//////////// GET ALL DAYS ////////////
app.get("/get_days", async (_, res) => {
  const allDays = await days.getDays();
  res.send(allDays);
});

//////////// GET DAY BY DATE ////////////
app.get("/:date", async (req, res) => {
  const day = await days.getDayByDate(req.params.date);
  res.send(day);
});

//////////// ADD DAY ////////////
app.post("/add_day", async (req, res) => {
  const date = req.body.date;
  const thought = req.body.thought;
  await days.addDay(date, thought);
  res.send({ message: "Success" });
});

app.listen(port, () => {
  console.log("Server listening at http://localhost:3000");
});
