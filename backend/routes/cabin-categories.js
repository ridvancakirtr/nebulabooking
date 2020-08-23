const express = require("express");
const router = express.Router();

const {addCabinCategory, getAllCabinCategoriesbyVessel} = require("../controllers/cabinCategoryController")


router.get("/vessel/:vessel", getAllCabinCategoriesbyVessel)
router.post("/add", addCabinCategory)



module.exports = router