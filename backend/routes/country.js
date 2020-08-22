const express = require("express");
const router = express.Router();
const {addCountry} = require("../controllers/countryController")

router.post("/addCountry", addCountry)


module.exports = router