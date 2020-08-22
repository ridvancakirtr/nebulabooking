const mongoose = require('mongoose');
const { schema } = require('./agency');

const Schema = mongoose.Schema;

const CountrySchema = new Schema({
    name : {
        type : String,
        required : [true,"Please provide a Country Name"]
    },
    // ports : [{
    //     type : Schema.Types.ObjectId,
    //     ref : "Port"
    // }]
})

module.exports = mongoose.model("Country", CountrySchema)