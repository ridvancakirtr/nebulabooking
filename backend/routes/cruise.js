const express = require("express");
const router = express.Router();
const {addCruise, updateCruise, getCruises} = require("../controllers/cruiseController")

router.post("/add", addCruise)
router.get("/GetAll", getCruises)
router.put("/updatecruise/:id", updateCruise)


module.exports = router

