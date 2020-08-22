const VesselService = require("../services/vessel-service");
const asyncErrorWrapper = require("express-async-handler");
const Vessel = require("../models/vessel");
const CustomError = require("../Helpers/error/CustomError");
const vesselService = require("../services/vessel-service");


const addVessel = asyncErrorWrapper( async (req,res,next) =>{

    const {name} = req.body;

    const vessel = await vesselService.add(req.body);

    if(!vessel) return next(new CustomError("Vessel Couldn't add",400));

    res.json({
        success : true,
        message : "Vessel added succesfully",
        data : vessel
    })    

});

module.exports = {
    addVessel
}