const VesselService = require("../services/vessel-service");
const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../Helpers/error/CustomError");
const portService = require("../services/port-service");


const addPort = asyncErrorWrapper( async (req,res,next) =>{


    const port = await portService.add(req.body);

    if(!port) return next(new CustomError("Port Couldn't add",400));

    res.json({
        success : true,
        message : "Port added succesfully",
        data : port
    })    

});

const getCountryPorts = asyncErrorWrapper( async (req,res,next) =>{
    const ports = await portService.findAll({ "country" : req.params.countryId })
    console.log("paramsssss", req.params.countryId)
    res.json({
        success: true,
        data : ports
    })

});



module.exports = {
    addPort,
    getCountryPorts
}