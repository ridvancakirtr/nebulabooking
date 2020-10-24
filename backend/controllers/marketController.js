const MarketService = require("../services/market-service");
const asyncErrorWrapper = require("express-async-handler");
const Vessel = require("../models/vessel");
const CustomError = require("../Helpers/error/CustomError");


const addMarket = asyncErrorWrapper( async (req,res,next) =>{

    //const {name} = req.body;

    const market = await MarketService.add(req.body);

    if(!market) return next(new CustomError("Market Couldn't add",400));

    res.json({
        success : true,
        message : "Market added succesfully",
        data : market
    })    

});

const getMarkets = asyncErrorWrapper(async (req,res,next)=>{
    const markets = await MarketService.findAll()

    if(!markets) return next(new CustomError("Markets couldn't fetched"),400)
    res.json({
        success: true,
        message : "Markets fetched successfuly",
        data : markets
    })
});


const updateMarket = asyncErrorWrapper(async(req,res,next)=>{
    const updatedMarket = await MarketService.update(req.params.id, req.body)

    if(!updatedMarket) return next(new CustomError("Market couldn't updated"),400)
    res.json({
        success : true,
        message : "Market Updated Successfully",
        data : updatedMarket
    })
})

module.exports = {
    addMarket,
    updateMarket,
    getMarkets
    
}