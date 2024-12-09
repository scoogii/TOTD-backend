const db = require("./db");

const getDays = () => {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM dates", (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

const getDayByDate = (date) => {
  return new Promise((resolve, reject) => {
    db.all(`SELECT * FROM dates where date = '${date}'`, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

const addDay = (date, thought) => {
  console.log(`${date} ${thought}`);
  return new Promise((resolve, reject) => {
    db.run(
      "INSERT INTO dates (date, thought) VALUES (?, ?)",
      date,
      thought,
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

module.exports = {
  getDays,
  getDayByDate,
  addDay,
};
