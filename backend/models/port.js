const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PortSchema = new Schema({
    name : {
        type : String,
        required :[true, "Please provide a Port name"]
    },
    country : {
        type : Schema.Types.ObjectId,
        ref : "Country"
    }
})

module.exports = mongoose.model("Port",PortSchema)