
const CruiseTypeModel = require("../models/CruiseType")
const BaseService = require("./baseservice")


class CruiseTypeService extends BaseService {
    model = CruiseTypeModel 
}

module.exports = new CruiseTypeService();