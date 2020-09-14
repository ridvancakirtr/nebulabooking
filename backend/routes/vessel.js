const express = require("express");
const router = express.Router();
const {addVessel, getVessels, updateVessel, getVessel} = require("../controllers/vesselController")

router.post("/addVessel",addVessel)
router.get("/", getVessels)
router.put("/updateVessel/:id",updateVessel)
router.get("/:id", getVessel)

module.exports = router;