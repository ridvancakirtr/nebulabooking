const express = require("express");
const router = express.Router();
const {addPort, getCountryPorts, getPorts, updatePort} = require("../controllers/portController")

router.post("/addPort", addPort)

router.get("/getCountryPorts/:countryId", getCountryPorts)
router.get("/", getPorts)
router.put("/updatePort/:id", updatePort)

module.exports = router