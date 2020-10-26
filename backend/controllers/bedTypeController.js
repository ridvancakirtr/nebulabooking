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

const updateBedType = asyncErrorWrapper( async(req,res,next)=>{

    const updatedbedtype = await bedTypeService.update(req.params.id, req.body)

    if(!updatedbedtype) return next(new CustomError("BedType couldn't updated"),400)
    res.json({
        success : true,
        message : "BedType Updated Successfully",
        data : updatedbedtype
    })

});

const getAllBedTypesByVessel = asyncErrorWrapper( async(req,res,next)=>{

    const vessel = req.params.vessel
    const options = {
        filter :{vessel},
        populate : "vessel"
    }
    const bedTypes = await bedTypeService.findAll(options)
    res.json({
        success:true,
        message : "All Bed Types",
        data : bedTypes
    })
})

module.exports = {
    addBedType,
    getAllBedTypesByVessel,
    updateBedType
}