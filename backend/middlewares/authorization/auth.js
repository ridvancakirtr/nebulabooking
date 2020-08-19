const CustomError = require("../../Helpers/error/CustomError")
const jwt = require ("jsonwebtoken")
const {isTokenIncluded,getAccessTokenFromHeader} = require("../../Helpers/authorization/tokenHelpers")

const getAccessToRoute = (req,res,next)=>{
    // TOKEN 
    const {JWT_SECRET_KEY} = process.env;
    if(!isTokenIncluded(req)){
        return next(new CustomError("You are not authorized to access",401))
    }

    const accessToken = getAccessTokenFromHeader(req)
    jwt.verify(accessToken, JWT_SECRET_KEY,(err,decoded)=>{
        if(err){
            return next(new CustomError("You are not authorized to access", 401))
        }
        console.log(decoded);
        next();
    })
    
    //CUSToM ERROR
}

module.exports = {
    getAccessToRoute
}