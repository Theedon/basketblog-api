const express = require("express");
const router = express.Router();
const teamControllers = require("../controllers/teamControllers.js");

router.get("/", teamControllers.teamsList);
router.get("/:id", teamControllers.teamById);

module.exports = router;
