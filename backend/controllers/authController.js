const AgencyService = require("../services/agency-service");
const asyncErrorWrapper = require("express-async-handler");
const Agency = require("../models/agency")
const {sendJwtToClient} = require("../Helpers/authorization/tokenHelpers");
const bcrypt = require("bcryptjs")
const CustomError = require("../Helpers/error/CustomError")


//login

const login = asyncErrorWrapper( async (req,res,next) =>{
    const {agencyCode, password} = req.body;
    
    if(!validateUserInput(agencyCode,password)) {
        return next(new CustomError("Please check your inputs",400));
    }
    const options = {
        filter :{agencyCode},
        populate : "agencyType",
        select : 'password'
    }
    const agency = await AgencyService.findOneby(options);

    if ( !agency || !checkPassword(password,agency.password)) {
        
        return next(new CustomError("Please check your credentials",404));
    }
    sendJwtToClient(agency,res,200);

}) 

const validateUserInput = (agencyCode,password) => agencyCode && password;
const checkPassword = (password,hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword);
}


module.exports = {
    login
}