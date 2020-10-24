const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CruiseSchema = new Schema({
    name : {
        type : String
    },
    description : {
        type: String
    },
    ports : [{
        type : Schema.Types.ObjectId,
        ref : "Port"
    }],
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
    season : {
        type: Schema.Types.ObjectId,
        ref : "Season"
    },
    vessel : {
        type : Schema.Types.ObjectId,
        ref : "Vessel"
    }
})

// CruiseSchema.pre('find', function(){
//     this.populate("vessel")
// })
module.exports = mongoose.model("Cruise", CruiseSchema)