const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../Helpers/error/CustomError");
const cruiseService = require("../services/cruise-service");
const cruise = require("../models/cruise")

const addCruise = asyncErrorWrapper( async (req,res,next) =>{


    const cruise = await cruiseService.add(req.body);

    //if(!cruise) return next(new CustomError("Country Couldn't add",400));

    res.json({
        success : true,
        message : "Cruise added succesfully",
        data : cruise
    })    

});

const getCruises = asyncErrorWrapper( async (req,res,next) =>{

    const options = {
        filter : null,
        populate : ["ports", "vessel"]
    }
    const cruises = await cruiseService.findAll(options)
    res.json({
        success:true,
        message : "Cruises fetched",
        data : cruises
    })
});

module.exports = {
    addCruise,
    getCruises
}