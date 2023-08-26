const express = require("express");
const router = express.Router();
const playerControllers = require("../controllers/playerControllers");

router.get("/", playerControllers.playersList);
router.get("/:id", playerControllers.playerById);
router.get("/team/:id", playerControllers.playersByTeamId);

module.exports = router;
