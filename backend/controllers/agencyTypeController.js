const AgencyTypeService = require("../services/agency-type-service");
const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../Helpers/error/CustomError");


const addAgencyType = asyncErrorWrapper( async (req,res,next) =>{

    const agencyType = await AgencyTypeService.add(req.body);

    if(!agencyType) return next(new CustomError("Vessel Couldn't add",400));

    res.json({
        success : true,
        message : "Agency Type added succesfully",
        data : agencyType
    })    

});

const getAll = asyncErrorWrapper( async (req,res,next) =>{

    const agencyTypes = await AgencyTypeService.findAll();

    res.status(200)
    .json({
        success : true,
        data : agencyTypes
    })
});

module.exports = {
    addAgencyType,
    getAll
}