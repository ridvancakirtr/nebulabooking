const express = require("express");
const router = express.Router();
const {addPassenger, getPassengersByBooking} = require("../controllers/passengerController")

router.post("/add", addPassenger)

router.get("/booking/:bookingid", getPassengersByBooking)


module.exports = router