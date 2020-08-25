const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../Helpers/error/CustomError");
const priceService = require("../services/price-service");
const price = require("../models/price")
var moment = require("moment")

const addPrice = asyncErrorWrapper( async (req,res,next) =>{

    const price = req.body
    console.log(req.body)
    const addedPrice = await priceService.add(price);

    //if(!cruise) return next(new CustomError("Country Couldn't add",400));
    // console.log(req.body);

    res.json({
        success : true,
        message : "Price added succesfully",
        data : [addedPrice]
    })    

});

const getPrices = asyncErrorWrapper( async (req,res,next) =>{

    const params = {
        vessel : req.params.vessel,
        CruiseType : req.params.CruiseType
    } 
    console.log(req.params)
    const options = {
        filter : params,
        populate : []
    }
    const prices = await priceService.findAll(options)
    res.json({
        success:true,
        message : "Prices fetched",
        data : prices
    })
});

module.exports = {
    addPrice,
    getPrices
}