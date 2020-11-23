const VesselService = require("../services/vessel-service");
const asyncErrorWrapper = require("express-async-handler");
const Vessel = require("../models/vessel");
const CustomError = require("../Helpers/error/CustomError");
const vesselService = require("../services/vessel-service");


const addVessel = asyncErrorWrapper( async (req,res,next) =>{

    //const {name} = req.body;

    const vessel = await vesselService.add(req.body);

    if(!vessel) return next(new CustomError("Vessel Couldn't add",400));

    res.json({
        success : true,
        message : "Vessel added succesfully",
        data : vessel
    })    

});

const getVessels = asyncErrorWrapper(async (req,res,next)=>{
    const vessels = await vesselService.findAll()

    if(!vessels) return next(new CustomError("Vessels couldn't fetched"),400)
    res.json({
        success: true,
        message : "Vessels fetched successfuly",
        data : vessels
    })
});

const getVessel = asyncErrorWrapper(async (req,res,next)=>{
    const vessel = await vesselService.find(req.params.id)

    if(!vessel) return next(new CustomError("Vessel couldn't fetched"),400)
    res.json({
        success: true,
        message : "Vessel fetched successfuly",
        data : vessel
    })


});

const updateVessel = asyncErrorWrapper(async(req,res,next)=>{
    const updatedVessel = await vesselService.update(req.params.id, req.body)

    if(!updatedVessel) return next(new CustomError("Vessel couldn't updated"),400)
    res.json({
        success : true,
        message : "Vessel Updated Successfully",
        data : updatedVessel
    })
})

module.exports = {
    addVessel,
    getVessels,
    updateVessel,
    getVessel
}