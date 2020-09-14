const express = require("express");
const router = express.Router();

const {addCabin, getAllCabinsbyVessel, updateCabin} = require("../controllers/cabinController")


router.get("/vessel/:vessel", getAllCabinsbyVessel)
router.post("/add", addCabin)
router.put("/update/:id", updateCabin)



module.exports = router