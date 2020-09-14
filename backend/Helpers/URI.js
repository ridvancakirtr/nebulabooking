const ApiURI = ()=>{
    if(process.env.NODE_ENV==='DEVELOPMENT')
    {
        return process.env.API_URI_DEV
    }else{
        return process.env.API_URI_PROD
    }
}

export default  {
    ApiURI
}