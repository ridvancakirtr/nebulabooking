
const CountryModel = require("../models/country")
const BaseService = require("./baseservice")


class CountryService extends BaseService {
    model = CountryModel 
}

module.exports = new CountryService();