const express = require("express");
const router = express.Router();

const {addCabin, getAllCabinsbyVessel} = require("../controllers/cabinController")


router.get("/vessel/:vessel", getAllCabinsbyVessel)
router.post("/add", addCabin)



module.exports = router