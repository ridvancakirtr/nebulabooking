const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CruiseSchema = new Schema({
    name : {
        type : String
    },
    description : {
        type: String
    },
    ports : {
        type : []
    },
    checkInDate : {
        type : Date,
        required : [true,"Please enter Check-in Date"]

    },
    checkOutDate : {
        type : Date,
        required : [true,"Please enter Check-out Date"]
    },
    cruiseType : {
        type: Schema.Types.ObjectId,
        ref : "CruiseType"
    },
    vessel : {
        type : Schema.Types.ObjectId,
        ref : "Vessel"
    }
})

module.exports = mongoose.model("Cruise", CruiseSchema)