const express = require("express");
const router = express.Router();
const {addMarket, getMarkets, updateMarket} = require("../controllers/marketController")

router.post("/add", addMarket)
router.get("/", getMarkets)
router.put("/updateMarket/:id", updateMarket)

module.exports = router