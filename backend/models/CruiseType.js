const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CruiseTypeSchema = new Schema({
    name : {
        type : String,
        required : [true,"Please enter the Cruise Type Name"]
    },
    vessel : {
        type: Schema.Types.ObjectId,
        ref : "Vessel"
    },
    tax : {
        type : Number,
        required : [true, "Please enter tax amount"]
    }
})


module.exports = mongoose.model("CruiseType", CruiseTypeSchema)