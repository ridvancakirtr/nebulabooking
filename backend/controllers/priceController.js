const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../Helpers/error/CustomError");
const priceService = require("../services/price-service");
const price = require("../models/price")
var moment = require("moment")

const addPrice = asyncErrorWrapper( async (req,res,next) =>{

    const price = req.body
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

});

const updatePrice = asyncErrorWrapper (async (req, res, next) => {
    const updatedPrice= await priceService.update(req.params.price, req.body)

    if(!updatedPrice) return next(new CustomError("Price couldn't updated"),400)
    res.json({
        success : true,
        message : "Price Updated Successfully",
        data : updatedPrice
    })
})

const deletePrice = asyncErrorWrapper (async (req,res,next)=> {

    const deletedPrice = await priceService.del(req.params.price)
    if(!deletedPrice) return next(new CustomError("Price couldn't deleted"),400)

    res.json({
        success : true,
        message : "Price deleted Successfully",
        data : deletedPrice
    })

    
})
module.exports = {
    addPrice,
    getPrices,
    updatePrice,
    deletePrice
}