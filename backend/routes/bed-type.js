const express = require("express");
const router = express.Router();

const {addBedType, getAllBedTypesByVessel, updateBedType} = require("../controllers/bedTypeController")


router.get("/vessel/:vessel", getAllBedTypesByVessel)
router.post("/add", addBedType)
router.put("/update/:id", updateBedType)



module.exports = router