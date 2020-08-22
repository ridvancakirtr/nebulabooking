module.exports =class Service {
async findAll() {
    return this.model.find()
}

async findAll(filter) {
    return this.model.find(filter)
}

async add(item) {
    return this.model.create(item)
}

async  del(itemId) {
    return this.model.deleteOne({ _id: itemId })
}

async find(itemId) {
    return this.model.findById(itemId)
}
}