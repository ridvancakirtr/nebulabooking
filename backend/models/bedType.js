const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BedTypeSchema = new Schema({
    name : {
        type : String,
        required :[true, "Please provide a Bed Type name"]
    },
    description : {
        type : String,
        required : false
    },
    vessel : {
        type : Schema.Types.ObjectId,
        ref : "Vessel"

    }
})

module.exports = mongoose.model("BedType",BedTypeSchema)