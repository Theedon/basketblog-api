const express = require("express");
const app = express();
const fs = require("fs");
const jsonDataPath = "data/dbase.json";

const PORT = "3000";
const readJson = require("./readJson");

app.use(express.json());

app.listen(PORT, () => {
  console.log(`listening on port ${3000}`);
});

app.use("/data", (req, res) => {
  readJson(jsonDataPath)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      console.error(error);
    });
});

app.use("/", (req, res) => {
  res.json({ data: "data" });
});
