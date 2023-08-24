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

module.exports = { playersList, playerById };
