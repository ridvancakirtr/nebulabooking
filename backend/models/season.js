const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SeasonSchema = new Schema({
    name : {
        type:String,
        required: [true,"Please provide a Season Name"]
    }    
    
})

module.exports = mongoose.model("Season",VesselSchema)