const express = require("express");
const router = express.Router();
const {addCountry, getCountries} = require("../controllers/countryController")

router.post("/addCountry", addCountry)
router.get("/", getCountries)


module.exports = router