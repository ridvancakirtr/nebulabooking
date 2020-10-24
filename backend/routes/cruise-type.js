const express = require("express");
const router = express.Router();
const {addCruiseType, getCruiseTypes, updateCruiseType} = require("../controllers/cruiseTypeController")

router.post("/add", addCruiseType)
router.get("/", getCruiseTypes)
router.put("/updateCruiseType/:id", updateCruiseType)


module.exports = router