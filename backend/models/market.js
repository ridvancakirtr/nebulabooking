const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MarketSchema = new Schema({
    name : {
        type:String,
        required: [true,"Please provide a Market Name"]
    }    
    
})

module.exports = mongoose.model("Market",MarketSchema)