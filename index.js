const express = require("express");
const app = express();
const fs = require("fs");
const jsonDataPath = "data/dbase.json";

const PORT = "3000";
const readJson = require("./readJson");

app.listen(PORT, () => {
  console.log(`listening on port ${3000}`);
});

app.use("/data", (req, res) => {
  const jsonData = readJson(jsonDataPath);
  res.json(jsonData);
});

app.use("/", (req, res) => {
  res.json({ data: "data" });
});
