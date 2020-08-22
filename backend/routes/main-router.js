const express = require('express');
const router = express.Router();

const agency = require('./agency');
const auth = require('./auth');
const vessel = require('./vessel')
const port = require('./port')
const country = require('./country')
const cruiseType = require('./cruise-type')
const cruise = require('./cruise')
const agencyType = require('./agency-type')
//  /api

router.use("/agency", agency);
router.use("/auth", auth);
router.use("/vessel",vessel)
router.use("/port", port)
router.use("/country", country)
router.use("/cruiseType", cruiseType)
router.use("/cruise",cruise)
router.use("/agencytype", agencyType)

module.exports = router;