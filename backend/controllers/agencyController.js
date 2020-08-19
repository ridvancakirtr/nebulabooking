const AgencyService = require("../services/agency-service")
const asyncErrorWrapper = require("express-async-handler");
const {sendJwtToClient} = require("../Helpers/authorization/tokenHelpers")



const createAgency = asyncErrorWrapper( async (req,res,next)=>{   
    const agency =  await AgencyService.add(req.body);
    

    sendJwtToClient(agency, res);
})

const tokentest = (req,res,next)=>{
    res.json({
        success : true,

    })
}

module.exports = {createAgency, tokentest};