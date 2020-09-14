const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PassengerSchema = new Schema({
    firstName : {
        type : String,
        required : [true,"Please enter passenger's FIRST NAME"]
    },
    lastName : {
        type : String,
        required : [true,"Please enter passenger's LAST NAME"]
    },
    Dob : {
        type : Date,
        required : [true,"Please enter passenger's DATE OF BIRTH"]
    },
    passportNo : {
        type : String,
        required : [true,"Please enter PASSPORT NUMBER"]
    },
    InternationalIdNo : {
        type : String,
        required : [true,"Please enter International ID Number"]
    },
    passportIssueDate : {
        type : Date,
        required : [true, "Please enter PASSPORT ISSUE DATE"]
    },
    passportExpiryDate : {
        type : Date,
        required : [true, "Please enter PASSPORT EXPIRY DATE"]
    },
    phoneNumber : {
        type : String,
        required : [true, "Please enter a PHONE NUMBER"]
    },
    email : {
        type : String,
        match : [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, "Please provide a valid email address"]
    },
    address : {
        type : String,
        required : [true, "Please enter an address"]
    },
    bookings : [{
        type : Schema.Types.ObjectId,
        ref : "Booking"
    }]
})

module.exports = mongoose.model("Passenger", PassengerSchema)