
const PassengerModel = require("../models/passenger")
const BaseService = require("./baseservice")


class PassengerService extends BaseService {
    model = PassengerModel 

    

}

module.exports = new PassengerService();