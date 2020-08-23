const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../Helpers/error/CustomError");
const bedTypeService = require("../services/bed-type-service")

const addBedType = asyncErrorWrapper( async(req,res,next)=>{

    const bedType = await bedTypeService.add(req.body)

    res.json({
        success:true,
        message : "Bed Type Added Succesfully",
        data : bedType
    })

});

const getAllBedTypesByVessel = asyncErrorWrapper( async(req,res,next)=>{

    const vessel = req.params.vessel
    const options = {
        filter :{vessel},
        populate : "vessel"
    }
    console.log(req.params.vesselid)
    console.log(options)
    const bedTypes = await bedTypeService.findAll(options)
    res.json({
        success:true,
        message : "All Bed Types",
        data : bedTypes
    })
})

module.exports = {
    addBedType,
    getAllBedTypesByVessel
}