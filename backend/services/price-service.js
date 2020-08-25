
const PriceModel = require("../models/price")
const BaseService = require("./baseservice")


class PriceService extends BaseService {
    model = PriceModel 

    async checkPrice(cruiseType, cabinCategory){
        return;
    }

    async calculatePrice(agencyCode, endUserPrice){
        return;
    }

}

module.exports = new PriceService();