const mongoose = require('mongoose')

const clientesSchema = new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    number: {type: Number, require: true},
    city: {type: String, require: true},
})

module.exports = mongoose.model('Clientes',clientesSchema)