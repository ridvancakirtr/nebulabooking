const asyncErrorWrapper = require("express-async-handler");
const CustomError = require("../Helpers/error/CustomError");
const passengerService = require("../services/passenger-service");
const price = require("../models/passenger")
var moment = require("moment")

const addPassenger = asyncErrorWrapper( async (req,res,next) =>{

    const passenger = req.body
    passenger.Dob = moment(req.body.Dob, "DD-MM-YYYY hh:mm").format('LLL')
    passenger.passportIssueDate = moment(req.body.passportIssueDate, "DD-MM-YYYY hh:mm").format('LLL')
    passenger.passportExpiryDate = moment(req.body.passportExpiryDate, "DD-MM-YYYY hh:mm").format('LLL')

    const addedPassenger = await passengerService.add(passenger);

    //if(!cruise) return next(new CustomError("Country Couldn't add",400));

    res.json({
        success : true,
        message : "Passenger added succesfully",
        data : [addedPassenger]
    })    
});


const getPassenger = asyncErrorWrapper ( async (req,res,next)=> {
    const {passportNo} = req.body
    const options = {

        filter : {passportNo},
        populate : []
    }
    
    const passenger = await passengerService.findAll(options)

    if (!passenger) return next(CustomError("Passenger Could't find"), 400)

    res.json({
        success : true,
        message : "Succesfull",
        data : passenger[0]
    })
})

// const getPassengersByBooking = asyncErrorWrapper( async (req,res,next) =>{

//     const params = {
//         booking : req.params.bookingid,
//     } 
//     const options = {
//         filter : params,
//         populate : []
//     }
//     const passengers = await passengerService.findAll(options)
//     res.json({
//         success:true,
//         message : "passengers fetched",
//         data : passengers
//     })
// });

module.exports = {
    addPassenger,
    getPassenger
}