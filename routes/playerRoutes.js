const express = require("express");
const router = express.Router();
const playerControllers = require("../controllers/playerControllers.js");

router.get("/", playerControllers.playersList);
router.get("/:id", playerControllers.playerById);

module.exports = router;
