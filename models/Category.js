const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    gama: {type: String, require: true},
    material: {type: String, require: true},
    uso:{type: String, require: true}
})

module.exports = mongoose.model('Category',categorySchema)