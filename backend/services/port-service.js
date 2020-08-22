
const PortModel = require("../models/port")
const BaseService = require("./baseservice")


class PortService extends BaseService {
    model = PortModel 
}

module.exports = new PortService();