const CabinModel = require("../models/cabin")
const BaseService = require("./baseservice")


class CabinService extends BaseService {
    model = CabinModel 
}

module.exports = new CabinService();