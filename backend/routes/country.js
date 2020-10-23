const express = require("express");
const router = express.Router();
const {addCountry, getCountries, updateCountry} = require("../controllers/countryController")

router.post("/addCountry", addCountry)
router.get("/", getCountries)
router.put("/updateCountry/:id", updateCountry)


module.exports = router