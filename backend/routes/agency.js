const express = require('express');
const router = express.Router();
const {createAgency, tokentest} = require("../controllers/agencyController")
const {getAccessToRoute} = require("../middlewares/authorization/auth");

router.get("/tokentest",getAccessToRoute, tokentest)

// api/agency
router.get("/", (req,res)=>{
    res.json({
        message : 'Agency Home'
    })    
})

// api/agency/all
router.get("/all",(req,res)=>{
    res.json({
        message : "Get All Agency"
    })
})

// api/agency/id
router.get("/:id",(req,res)=>{
    res.json({
        message:"Get Agency by ID"
    })
})

// api/agency/create
router.post("/create", createAgency)

router.put("/update/:id",(req,res)=>{
    res.json({
        message: " Update Agency"
    })
})

router.delete("/delete/:id",(req,res)=>{
    res.json({
        message:"Delete Agency"
    })
})

module.exports = router;