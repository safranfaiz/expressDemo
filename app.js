const express = require("express");

let constants = require("./constant");
let readDB = require("./readDB");

const app = express();

app.get(constants.BASE, function (req, res) {
  res.send("Welcome to Express");
});

app.get(constants.STUDENTS, function (req, res) {
  const data = readDB();
  res.send(data);
});

app.listen(constants.PORT);
