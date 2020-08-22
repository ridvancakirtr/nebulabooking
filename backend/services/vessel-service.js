
const VesselModel = require("../models/vessel");
const BaseService = require("./baseservice");


class VesselService extends BaseService {
    model = VesselModel 
}

module.exports = new VesselService();