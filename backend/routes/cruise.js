const express = require("express");
const router = express.Router();
const {addCruise, getCruises} = require("../controllers/cruiseController")

router.post("/add", addCruise)
router.get("/GetAll", getCruises)


module.exports = router

