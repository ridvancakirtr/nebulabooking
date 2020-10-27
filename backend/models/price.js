const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PriceSchema = new Schema({
    endUserPrice : {
        type : Number,
        required :[true, "Please provide a Price"]
    },
    CruiseType : {
        type : Schema.Types.ObjectId,
        ref : "CruiseType"
    },
    cabinCategory : {
        type : Schema.Types.ObjectId,
        ref : "CabinCategory"
    },
    vessel : {
        type : Schema.Types.ObjectId,
        ref : "Vessel"
    },
    season : {
        type : Schema.Types.ObjectId,
        ref : "Season"
    }
})

module.exports = mongoose.model("Price",PriceSchema)