
const SeasonModel = require("../models/season");
const BaseService = require("./baseservice");


class SeasonService extends BaseService {
    model = SeasonModel 
}

module.exports = new SeasonService();