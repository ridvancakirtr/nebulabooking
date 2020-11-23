const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../Helpers/error/CustomError");
const bookingService = require("../services/bookingService");
const cruise = require("../models/cruise")
var moment = require("moment")
var tokenHelper = require('../Helpers/authorization/tokenHelpers')

const createBooking = asyncErrorWrapper( async (req,res,next) =>{

    const booking = req.body
    // cruise.checkInDate = moment(req.body.checkInDate, "DD-MM-YYYY hh:mm").format('LLL')
    // cruise.checkOutDate = moment(req.body.checkOutDate, "DD-MM-YYYY hh:mm").format('LLL')

    const createdBooking = await bookingService.add(booking);

    if(!createBooking) return next(new CustomError("Bookung Couldn't Created",400));

    res.json({
        success : true,
        message : "Booking added succesfully",
        data : [createdBooking]
    })    

});

const getAllbookingsbyagency = asyncErrorWrapper( async (req,res,next) =>{

    var decodedAgency = tokenHelper.verifyToken(req.headers.cookie)

    const options = {
        filter : decodedAgency.agencyCode,
        populate : ["agency", "vessel", "cruiseType", "season", "cruise"]
    }
    const bookings = await cruiseService.findAll(options)
    res.json({
        success:true,
        message : "Cruises fetched",
        data : cruises
    })
});


module.exports = {
    createBooking,
    getAllbookingsbyagency,
}