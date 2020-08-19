const express = require('express');
const router = express.Router();

const agency = require('./agency')
//  /api

router.use("/agency",agency);



module.exports = router;