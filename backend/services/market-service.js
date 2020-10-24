
const MarketModel = require("../models/market");
const BaseService = require("./baseservice");


class MarketService extends BaseService {
    model = MarketModel 
}

module.exports = new MarketService();