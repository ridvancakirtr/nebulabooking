const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../Helpers/error/CustomError");
const cruiseTypeService = require("../services/cruise-type-service");


const addCruiseType = asyncErrorWrapper( async (req,res,next) =>{


    const cruiseType = await cruiseTypeService.add(req.body);

    if(!cruiseType) return next(new CustomError("Cruise Type Couldn't add",400));

    res.json({
        success : true,
        message : "Cruise Type added succesfully",
        data : cruiseType
    })    

});

module.exports = {
    addCruiseType
}