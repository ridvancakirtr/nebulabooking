const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CruiseTypeSchema = new Schema({
    name : {
        type : String,
        required : [true,"Please enter the Cruise Type Name"]
    }
})


module.exports = mongoose.model("CruiseType", CruiseTypeSchema)