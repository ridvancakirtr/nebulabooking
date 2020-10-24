const SeasonService = require("../services/season-service");
const asyncErrorWrapper = require("express-async-handler");
const Vessel = require("../models/vessel");
const CustomError = require("../Helpers/error/CustomError");
const vesselService = require("../services/vessel-service");


const addSeason = asyncErrorWrapper( async (req,res,next) =>{

    //const {name} = req.body;

    const season = await SeasonService.add(req.body);

    if(!season) return next(new CustomError("Season Couldn't add",400));

    res.json({
        success : true,
        message : "Season added succesfully",
        data : vessel
    })    

});

const getSeasons = asyncErrorWrapper(async (req,res,next)=>{
    const seasons = await SeasonService.findAll()

    if(!seasons) return next(new CustomError("Seasons couldn't fetched"),400)
    res.json({
        success: true,
        message : "Seasons fetched successfuly",
        data : seasons
    })
});


const updateSeason = asyncErrorWrapper(async(req,res,next)=>{
    const updatedSeason = await SeasonService.update(req.params.id, req.body)

    if(!updatedSeason) return next(new CustomError("Season couldn't updated"),400)
    res.json({
        success : true,
        message : "Season Updated Successfully",
        data : updatedSeason
    })
})

module.exports = {
    addSeason,
    updateSeason,
    getSeasons
    
}