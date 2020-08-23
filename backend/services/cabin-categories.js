const CabinCategoryModel = require("../models/cabinCategory")
const BaseService = require("./baseservice")


class CabinCategoryService extends BaseService {
    model = CabinCategoryModel 
}

module.exports = new CabinCategoryService();