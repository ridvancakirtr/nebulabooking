
const BookingModel = require("../models/booking")
const BaseService = require("./baseservice")


class BookingService extends BaseService {
    model = BookingModel 
}

module.exports = new BookingService();