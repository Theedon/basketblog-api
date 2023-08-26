const readJson = require("../utilityFunctions/readJson");
const path = require("path");
const jsonDataPath = path.join(process.cwd(), "./data/dbase.json");

const getPlayerById = (data, playerId) => {
  for (let i = 0; i < data.players.length; i++) {
    if (playerId === data.players[i].playerId.toString()) {
      return data.players[i];
    }
  }
  return { data: "not present" };
};

const getPlayersByTeamid = (data, teamId) => {
  let players = [];
  for (let i = 0; i < data.players.length; i++) {
    if (teamId === data.players[i].teamId.toString()) {
      players.push(data.players[i]);
    }
  }
  return players;
};

const playersList = (req, res) => {
  readJson(jsonDataPath).then((data) => {
    res.status(200).json(data.players);
  });
};

const playerById = (req, res) => {
  readJson(jsonDataPath).then((data) => {
    const playerId = req.params.id;
    const playerData = getPlayerById(data, playerId);
    res.status(200).json(playerData);
  });
};

const playersByTeamId = (req, res) => {
  readJson(jsonDataPath)
    .then((data) => {
      const teamId = req.params.id;
      const players = getPlayersByTeamid(data, teamId);
      res.status(200).json(players);
    })
    .catch((err) => {
      throw err;
      console.error(err);
    });
};

module.exports = { playersList, playerById, playersByTeamId };
