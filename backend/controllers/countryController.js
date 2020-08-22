const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../Helpers/error/CustomError");
const countryService = require("../services/country-service");


const addCountry = asyncErrorWrapper( async (req,res,next) =>{


    const country = await countryService.add(req.body);

    if(!country) return next(new CustomError("Country Couldn't add",400));

    res.json({
        success : true,
        message : "Country added succesfully",
        data : country
    })    

});

module.exports = {
    addCountry
}