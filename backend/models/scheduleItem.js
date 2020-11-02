const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ScheduleItemSchema = new Schema({
    date : {
        type : Date,
        required :[true, "Please provide a Date"]
    },
    port : {
        type : Schema.Types.ObjectId,
        required : [true, "Please provide a Port"],
        ref : "Port"
    },
    arrivalTime : {
        type : String
    },
    departureTime : {
        type: String
    }
})

module.exports = mongoose.model("ScheduleItem",ScheduleItemSchema)