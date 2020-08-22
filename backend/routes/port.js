const express = require("express");
const router = express.Router();
const {addPort, getCountryPorts} = require("../controllers/portController")

router.post("/addPort", addPort)

router.get("/getCountryPorts/:countryId", getCountryPorts)


module.exports = router