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

const getCountries = asyncErrorWrapper(async (req,res,next)=>{
    const countries = await countryService.findAll()

    if(!countries) return next(new CustomError("Countries couldn't fetched"),400)
    res.json({
        success: true,
        message : "Countries fetched successfuly",
        data : countries
    })
});


const updateCountry = asyncErrorWrapper(async(req,res,next)=>{
    console.log(req.params.id)
    const updatedCountry = await countryService.update(req.params.id, req.body)

    if(!updatedCountry) return next(new CustomError("Country couldn't updated"),400)
    res.json({
        success : true,
        message : "Country Updated Successfully",
        data : updatedCountry
    })
})

module.exports = {
    addCountry,
    getCountries,
    updateCountry
}