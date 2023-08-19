const express = require("express");
const app = express();
const fs = require("fs");
const jsonDataPath = "data/dbase.json";

const PORT = "3000";
const readJson = require("./readJson");

app.listen(PORT, () => {
  console.log(`listening on port ${3000}`);
});

app.get("/data", (req, res) => {
  const jsonData = readJson(jsonDataPath);
  res.json(jsonData);
});
