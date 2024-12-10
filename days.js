const db = require("./db");

//////////// GET ALL DAYS ////////////
const getDays = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM days", (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

//////////// GET DAY BY DATE ////////////
const getDayByDate = (date) => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM days where date = '${date}'`, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

//////////// ADD DAY ////////////
const addDay = (date, thought) => {
  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO days (date, thought) VALUES (?, ?)",
      [date, thought],
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      },
    );
  });
};

//////////// UPDATE DAY ////////////
const updateDay = (id, date, thought) => {
  return new Promise((resolve, reject) => {
    db.run(
      "UPDATE days SET date = (?), thought = (?) where id = (?)",
      [date, thought, id],
      (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      },
    );
  });
};

//////////// REMOVE DAY ////////////
const removeDay = (id) => {
  return new Promise((resolve, reject) => {
    db.run("DELETE FROM days WHERE id = (?)", id, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};

module.exports = {
  getDays,
  getDayByDate,
  addDay,
  updateDay,
  removeDay,
};
