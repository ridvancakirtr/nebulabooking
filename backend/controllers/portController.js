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

const getPorts = asyncErrorWrapper( async (req,res,next) =>{

    const options = {
        filter :null,
        populate : ["country"]
    }

    const ports = await portService.findAll(options)

    if(!ports) return next(new CustomError("Ports couldn't fetched"),400)
    res.json({
        success: true,
        message : "Ports fetched successfuly",
        data : ports
    })

});

const updatePort = asyncErrorWrapper(async(req,res,next)=>{
    const updatedPort = await portService.update(req.params.id, req.body)

    if(!updatedPort) return next(new CustomError("Port couldn't updated"),400)
    res.json({
        success : true,
        message : "Port Updated Successfully",
        data : updatedPort
    })
})



module.exports = {
    addPort,
    getCountryPorts,
    getPorts,
    updatePort
}