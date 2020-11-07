const CabinModel = require("../models/cabin")
const BaseService = require("./baseservice")
const cruiseService = require("./cruise-service")


class CabinService extends BaseService {
    model = CabinModel 

    async findAvailableCabins(options){
        
        const blockCabins = []
        options.cruise.blockedCabins.forEach(element => {
            blockCabins.push(element.cabin)
        });
        console.log(options.filter)
        return await this.model.find({_id : {$nin : blockCabins}, 'vessel' : options.cruise.vessel}).populate(options.populate)
    }

    async findAvailableCabinsByCabinCategory(options){
        const blockCabins = []
        options.cruise.blockedCabins.forEach(element => {
            blockCabins.push(element.cabin)
        });
        
            console.log(options.filter)
        return await this.model.find({_id : {$nin : blockCabins}, 'vessel' : options.cruise.vessel, 'cabinCategory' : options.cabinCategory }).populate(options.populate)
    }
}

module.exports = new CabinService();