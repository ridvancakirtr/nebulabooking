const express = require("express");
const router = express.Router();
const {addAgencyType, getAll, updateAgencyType} = require("../controllers/agencyTypeController")

router.post("/add", addAgencyType)
router.get("/", getAll)
router.put("/updateAgencyType/:id", updateAgencyType)


module.exports = router