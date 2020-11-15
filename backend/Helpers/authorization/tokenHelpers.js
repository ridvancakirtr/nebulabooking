
const sendJwtToClient = (agency, res)=>{
    //GENERATE JWT
        const token = agency.generateJwtFromAgency();
        const {JWT_COOKIE,NODE_ENV} = process.env;
        // console.log(agency)
        return res
            .status(200)
            .cookie("access_token", token,{
                httpOnly : true,
                expires : new Date(Date.now() + parseInt(JWT_COOKIE)*1000*60),
                sameSite : 'none',
                secure : true
                //secure : NODE_ENV==="DEVELOPMENT" ? false : true
            })
            .json({
                success : true,
                message : 'Agency Logged-in Successfully',
                access_token : token,
                data :{
                    agencyCode : agency.agencyCode,
                    email : agency.email,
                    companyName : agency.companyName,
                    authorizedPerson : agency.authorizedPerson,
                    agencyType : agency.agencyType
                }
            })

    
};

const isTokenIncluded = (req)=>{
    return (req.headers.authorization && req.headers.authorization.startsWith("Bearer"))
    };

const getAccessTokenFromHeader = (req) =>{
    const authorization = req.headers.authorization;
    const access_token = authorization.split(" ")[1];
    return access_token;
}

module.exports = {
    sendJwtToClient,
    isTokenIncluded,
    getAccessTokenFromHeader
};