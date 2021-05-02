const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {type: String, require: true},
    price: {type: Number, require: true},
    idCategory: [{type: mongoose.Schema.Types.ObjectId, ref:'Category'}]
})

module.exports = mongoose.model('Product',productSchema)