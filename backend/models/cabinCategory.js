const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CabinCategorySchema = new Schema({
    name : {
        type : String,
        required :[true, "Please provide a Cabin Category name"]
    },
    vessel : {
        type : Schema.Types.ObjectId,
        ref : "Vessel"

    }
})

module.exports = mongoose.model("CabinCategory",CabinCategorySchema)