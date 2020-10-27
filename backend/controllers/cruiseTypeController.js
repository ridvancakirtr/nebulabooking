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

const getCruiseTypes = asyncErrorWrapper(async (req,res,next)=>{

    const options = {
        filter : null,
        populate : ["vessel"]
    }
    const cruiseTypes = await cruiseTypeService.findAll(options)

    if(!cruiseTypes) return next(new CustomError("Cruise Types couldn't fetched"),400)
    res.json({
        success: true,
        message : "Cruise Types fetched successfuly",
        data : cruiseTypes
    })
});

const getCruiseTypesbyVessel = asyncErrorWrapper(async (req,res,next)=>{

    const vessel = req.params.vessel
    const options = {
        filter : {vessel},
        populate : ["vessel"]
    }
    const cruiseTypes = await cruiseTypeService.findAll(options)

    if(!cruiseTypes) return next(new CustomError("Cruise Types couldn't fetched"),400)
    res.json({
        success: true,
        message : "Cruise Types fetched successfuly",
        data : cruiseTypes
    })
});


const updateCruiseType = asyncErrorWrapper(async(req,res,next)=>{
    const updatedCruiseType = await cruiseTypeService.update(req.params.id, req.body)

    if(!updatedCruiseType) return next(new CustomError("Cruise Type couldn't updated"),400)
    res.json({
        success : true,
        message : "Cruise Type Updated Successfully",
        data : updatedCruiseType
    })
})

module.exports = {
    addCruiseType,
    getCruiseTypes,
    updateCruiseType,
    getCruiseTypesbyVessel
}