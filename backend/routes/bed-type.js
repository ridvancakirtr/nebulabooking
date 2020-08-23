const express = require("express");
const router = express.Router();

const {addBedType, getAllBedTypesByVessel} = require("../controllers/bedTypeController")


router.get("/vessel/:vessel", getAllBedTypesByVessel)
router.post("/add", addBedType)



module.exports = router