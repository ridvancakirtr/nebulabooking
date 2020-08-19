
const sendJwtToClient = (user, res)=>{
    //GENERATE JWT
        const token = user.generateJwtFromAgency();
        const {JWT_COOKIE,NODE_ENV} = process.env;
        return res
            .status(200)
            .cookie("access_token", token,{
                htppOnly : true,
                expires : new Date(Date.now() + parseInt(JWT_COOKIE)*1000),
                secure : NODE_ENV==="DEVELOPMENT" ? false : true
            })
            .json({
                success : true,
                access_token : token,
                data :{
                    agencyCode : user.agencyCode,
                    name : user.companyName,
                    email : user.email
                }
            })

    //
};

const isTokenIncluded = (req)=>{
    return (req.headers.authorization && req.headers.authorization.startsWith("Bearer:"))
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