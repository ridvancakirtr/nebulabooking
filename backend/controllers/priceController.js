const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../Helpers/error/CustomError");
const priceService = require("../services/price-service");
const price = require("../models/price")
var moment = require("moment")

const addPrice = asyncErrorWrapper( async (req,res,next) =>{

    const price = req.body
    console.log(req.body)
    const addedPrice = await priceService.add(price);

    if(!addedPrice) return next(new CustomError("Price Couldn't add",400));

    res.json({
        success : true,
        message : "Price added succesfully",
        data : addedPrice
    })    

});

const getPrices = asyncErrorWrapper( async (req,res,next) =>{

    const params = {
        vessel : req.params.vessel,
        cruiseType : req.params.cruiseType,
        market : req.params.market,
        season : req.params.season
    } 
    // console.log(req.params)
    const options = {
        filter : params,
        populate : ["vessel", "cabinCategory", "cruiseType", "market", "season"]
    }
    const prices = await priceService.findAll(options)
    
    res.json({
        success:true,
        message : "Prices fetched",
        data : prices
    })

    console.log(res)
});

module.exports = {
    addPrice,
    getPrices
}