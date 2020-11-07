const express = require("express");
const router = express.Router();

const {addCabin, getAllCabinsbyVessel,getAvailableCabinsBycabinCategory, getAllAvailableCabins, updateCabin} = require("../controllers/cabinController")


router.get("/vessel/:vessel", getAllCabinsbyVessel)
router.post("/add", addCabin)
router.put("/update/:id", updateCabin)
router.get("/cruise/:cruise/", getAllAvailableCabins)
router.get("/cruise/:cruise/cabinCategory/:cabinCategory", getAvailableCabinsBycabinCategory)



module.exports = router