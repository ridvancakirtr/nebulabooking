const express = require("express");
const router = express.Router();

const {addCabinCategory, getAllCabinCategoriesbyVessel, updateCabinCategory} = require("../controllers/cabinCategoryController")


router.get("/vessel/:vessel", getAllCabinCategoriesbyVessel)
router.post("/add", addCabinCategory)
router.put("/update/:id", updateCabinCategory)



module.exports = router