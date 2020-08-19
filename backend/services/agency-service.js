
const AgencyModel = require("../models/agency")
const BaseService = require("./baseservice")


class AgencyService extends BaseService {
    model = AgencyModel 
}

module.exports = new AgencyService();