const express = require("express");
const bodyParser = require("body-parser");
const days = require("./days");
const cors = require("cors");

const port = 3000;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", async (_, res) => {
  res.send({ message: "OK" });
});

//////////// GET ALL DAYS ////////////
app.get("/dates", async (_, res) => {
  const allDates = await days.getDates();

  res.send(allDates);
});

//////////// GET DAY BY DATE ////////////
app.get("/day/:date", async (req, res) => {
  const date = req.params.date;
  const day = await days.getDayByDate(date);

  res.send(day);
});

//////////// ADD DAY ////////////
app.post("/day", async (req, res) => {
  const date = req.body.date;
  const thought = req.body.thought;
  await days.addDay(date, thought);

  res.send({ message: "Success" });
});

//////////// UPDATE DAY ////////////
app.put("/day/:id", async (req, res) => {
  const id = req.params.id;
  const date = req.body.date;
  const thought = req.body.thought;
  await days.updateDay(id, date, thought);

  res.send({ message: "Success" });
});

//////////// REMOVE DAY ////////////
app.delete("/day/:id", async (req, res) => {
  const id = req.params.id;
  await days.removeDay(id);

  res.send({ message: "Success" });
});

app.listen(port, () => {
  console.log("Server listening at http://localhost:3000");
});
