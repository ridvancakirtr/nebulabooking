const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../Helpers/error/CustomError");
const cabinService = require("../services/cabin-service")

const addCabin = asyncErrorWrapper( async(req,res,next)=>{

    const cabin = await cabinService.add(req.body)

    res.json({
        success:true,
        message : "Cabin Added Succesfully",
        data : cabin
    })

});

const getAllCabinsbyVessel = asyncErrorWrapper( async(req,res,next)=>{

    const vessel = req.params.vessel
    const options = {
        filter : {vessel},
        populate : ["vessel", "bedType", "cabinCategory"]
    }
    console.log(vessel)
    const cabins = await cabinService.findAll(options)
    res.json({
        success:true,
        message : "All Cabins",
        data : cabins
    })
});

const updateCabin = asyncErrorWrapper( async(req,res,next)=>{

    const updatedCabin= await cabinService.update(req.params.id, req.body)

    if(!updatedCabin) return next(new CustomError("Cabin couldn't updated"),400)
    res.json({
        success : true,
        message : "Cabin Updated Successfully",
        data : updatedCabin
    })

});

module.exports = {
    addCabin,
    getAllCabinsbyVessel,
    updateCabin
}