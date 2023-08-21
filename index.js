const path = require("path");
const express = require("express");
const app = express();
const fs = require("fs");
const jsonDataPath = path.join(process.cwd(), "data/dbase.json");

const PORT = 3000;
const readJson = require("./readJson");
let cachedData = null;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`listening on port ${3000}`);
});

//middleware that loads json data from file
app.use((req, res, next) => {
  if (!cachedData) {
    readJson(jsonDataPath)
      .then((data) => {
        cachedData = data;
        next();
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ error: "internal server error" });
      });
  } else {
    next();
  }
});

app.get("/teams", (req, res) => {
  res.status(200).json(cachedData);
});
