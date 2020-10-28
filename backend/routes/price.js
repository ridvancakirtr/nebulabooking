const express = require("express");
const router = express.Router();
const {addPrice, getPrices} = require("../controllers/priceController")

router.post("/add", addPrice)

router.get("/vessel/:vessel/cruiseType/:cruiseType/market/:market/season/:season", getPrices)


module.exports = router