const fs = require("fs");

module.exports = function () {
  try {
    const dbData = fs.readFileSync("./studentsDB.json");
    const data = JSON.parse(dbData);
    return data;
  } catch (err) {
    console.log("err: " + err);
  }
};
