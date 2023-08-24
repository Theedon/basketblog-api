const readJson = require("../utilityFunctions/readJson");
const path = require("path");
const jsonDataPath = path.join(process.cwd(), "./data/dbase.json");

const getTeamById = (data, teamId) => {
  for (let i = 0; i < data.teams.length; i++) {
    if (teamId === data.teams[i].id.toString()) {
      return data.teams[i];
    }
  }
  return { data: "not present" };
};

const teamsList = (req, res) => {
  readJson(jsonDataPath).then((data) => {
    res.status(200).json(data.teams);
  });
};

const teamById = (req, res) => {
  readJson(jsonDataPath).then((data) => {
    const teamId = req.params.id;
    const teamData = getTeamById(data, teamId);
    res.status(200).json(teamData);
  });
};

module.exports = { teamsList, teamById };
