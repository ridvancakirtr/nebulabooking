const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../Helpers/error/CustomError");
const cabinCategoryService = require("../services/cabin-categories")

const addCabinCategory = asyncErrorWrapper( async(req,res,next)=>{

    const cabinCategory = await cabinCategoryService.add(req.body)

    res.json({
        success:true,
        message : "Cabin Category Added Succesfully",
        data : cabinCategory
    })

});

const getAllCabinCategoriesbyVessel = asyncErrorWrapper( async(req,res,next)=>{

    const vessel = req.params.vessel
    const options = {
        filter : {vessel},
        populate : "vessel"
    }
    console.log(vessel)
    const cabinCategories = await cabinCategoryService.findAll(options)
    res.json({
        success:true,
        message : "All Cabin Categories",
        data : cabinCategories
    })
})

module.exports = {
    addCabinCategory,
    getAllCabinCategoriesbyVessel
}