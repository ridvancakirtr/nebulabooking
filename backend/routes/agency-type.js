const express = require("express");
const router = express.Router();
const {addAgencyType, getAll} = require("../controllers/agencyTypeController")

router.post("/add", addAgencyType)
router.get("/", getAll)


module.exports = router