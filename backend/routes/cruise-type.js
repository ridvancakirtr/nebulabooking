const express = require("express");
const router = express.Router();
const {addCruiseType} = require("../controllers/cruiseTypeController")

router.post("/add", addCruiseType)


module.exports = router