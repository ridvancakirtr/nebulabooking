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
const cabinCategorie = require("./cabin-categories")
const bedType = require("./bed-type")
const cabin = require("./cabin")
const price = require("./price")
const passenger = require("./passenger")
//  /api

router.use("/agency", agency);
router.use("/auth", auth);
router.use("/vessels",vessel)
router.use("/port", port)
router.use("/country", country)
router.use("/cruiseType", cruiseType)
router.use("/cruise",cruise)
router.use("/agencytype", agencyType)
router.use("/cabinCategories", cabinCategorie)
router.use("/bedtype",bedType)
router.use("/cabin", cabin)
router.use("/price", price)
router.use("/passenger", passenger)

module.exports = router;