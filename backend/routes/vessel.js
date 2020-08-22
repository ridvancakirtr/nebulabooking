const express = require("express");
const router = express.Router();
const {addVessel} = require("../controllers/vesselController")

router.post("/addVessel",addVessel)


module.exports = router;