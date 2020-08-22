
const CruiseModel = require("../models/cruise")
const BaseService = require("./baseservice")


class CruiseService extends BaseService {
    model = CruiseModel 
}

module.exports = new CruiseService();