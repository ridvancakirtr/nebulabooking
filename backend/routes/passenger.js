const express = require("express");
const router = express.Router();
const {addPassenger, getPassenger, getPassengersByBooking} = require("../controllers/passengerController")

router.post("/add", addPassenger)

router.get("/getPassenger", getPassenger)


module.exports = router