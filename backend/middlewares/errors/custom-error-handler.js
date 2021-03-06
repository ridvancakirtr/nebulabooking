const CustomError = require("../../Helpers/error/CustomError");
const customErrorHandler = (err,req,res,next)=>{
    let customError = err;
    
    
    console.log(err)
    if(err.name === "SyntaxError"){
        customError = new CustomError("Unexpected Syntax Error", 400)
    }
    if(err.name=== "ValidationError"){
        customError = new CustomError(err.message, 400)
    }
    if(err.name === "MongoError"){
        customError = new CustomError(err.message,400)
    }

    res.status(customError.status || 500)
    .json({
        success : false,
        message: customError.message || "Internal Server Error"
    })
}

module.exports = customErrorHandler;