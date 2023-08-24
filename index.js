const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");
const jsonDataPath = path.join(process.cwd(), "data/dbase.json");

const PORT = 3000;
const readJson = require("./utilityFunctions/readJson");
let cachedData = null;

const getTeamById = (data, teamId) => {
  for (let i = 0; i < data.teams.length; i++) {
    if (teamId === data.teams[i].id.toString()) {
      return data.teams[i];
    }
  }
  return { data: "not present" };
};

app.use(cors());
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

app.get("/", (req, res) => {
  res.status(200).send({
    data: "this is a node api serverless function hosted on vercel that serves data to the basketblog project",
  });
});
app.get("/teams", (req, res) => {
  res.status(200).json(cachedData);
});

app.get("/teams/:id", (req, res) => {
  const teamId = req.params.id;
  const teamData = getTeamById(cachedData, teamId);
  res.status(200).json(teamData);
});

app.use((req, res, next) => {
  res.redirect("/");
});
