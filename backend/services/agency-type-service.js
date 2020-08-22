
const AgencyTypeModel = require("../models/agencyType")
const BaseService = require("./baseservice")


class AgencyTypeService extends BaseService {
    model = AgencyTypeModel 
}

module.exports = new AgencyTypeService();