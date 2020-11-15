const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VesselSchema = new Schema({
    name : {
        type:String,
        required: [true,"Please provide a Vessel Name"]
    },
    flag : {
        type:String,
        required: [true,"Please provide a Flag"]
    }
})

module.exports = mongoose.model("Vessel",VesselSchema)