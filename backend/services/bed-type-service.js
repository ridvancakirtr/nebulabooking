const BedTypeModel = require("../models/bedType")
const BaseService = require("./baseservice")


class BedTypeService extends BaseService {
    model = BedTypeModel 
}

module.exports = new BedTypeService();