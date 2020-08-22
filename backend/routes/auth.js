const express = require("express");
const router = express.Router();
const agency = require("../models/agency")

const {login} = require("../controllers/authController")



router.post("/login", login)

module.exports = router
