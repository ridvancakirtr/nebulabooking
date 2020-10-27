const express = require("express");
const router = express.Router();
const {addCruiseType, getCruiseTypes,getCruiseTypesbyVessel, updateCruiseType} = require("../controllers/cruiseTypeController")

router.post("/add", addCruiseType)
router.get("/", getCruiseTypes)
router.get("/vessel/:vessel", getCruiseTypesbyVessel)
router.put("/updateCruiseType/:id", updateCruiseType)


module.exports = router