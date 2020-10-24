const express = require("express");
const router = express.Router();
const {addSeason, getSeasons, updateSeason} = require("../controllers/seasonController")

router.post("/add", addSeason)
router.get("/", getSeasons)
router.put("/updateSeason/:id", updateSeason)

module.exports = router