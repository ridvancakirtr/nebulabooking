const express = require("express");
const router = express.Router();

const {createBooking, getAllbookingsbyagency} = require("../controllers/bookingController")


router.get("/mybookings/", getAllbookingsbyagency)
router.post("/createBooking/", createBooking)
//router.put("/update/:id", updateBedType)



module.exports = router