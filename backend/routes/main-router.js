const express = require('express');
const router = express.Router();

const agency = require('./agency');
const auth = require('./auth');
const vessel = require('./vessel')
const port = require('./port')
const country = require('./country')
const cruiseType = require('./cruise-type')
//  /api

router.use("/agency", agency);
router.use("/auth", auth);
router.use("/vessel",vessel)
router.use("/port", port)
router.use("/country", country)
router.use("/cruiseType", cruiseType)

module.exports = router;