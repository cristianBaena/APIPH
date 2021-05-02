const productModel = require('../models/Product')
const product = require('../Routes/product')


//creacion de un nuevo producto

exports.create = (req, res) => {
    const product = new productModel({
        name: req.body.name,
        price: req.body.price,
        idCategory: req.body.idCategory
    })

    product.save().then(
        data => {
            res.send(data)
        }
    ).catch(
        error => {
            return res.status(500).send({
                message: 'error al guardar el producto'
            })
        }
    )

}



//listado de todas los productos con sus respectivas categorias por id y por nombre gracias a populate

exports.findAll = (req, res) => {
    productModel.find()
        .populate('idCategory')
        .exec()
        .then(
            products => {
                res.send(products)
            }
        ).catch(
            error => {
                return res.status(500).send({
                    message: 'no se encontraron productos'
                })
            }
        )
}



//actualizacion de algun producto

exports.update = (req, res) => {
    const Product = {
        name: req.body.name,
        price: req.body.price,
        idCategory: req.body.idCategory
    }
    productModel.findByIdAndUpdate(req.params.id, product, { new: true }).then(
        data => {
            res.send(data)
        }
    ).catch(
        error => {
            return res.status(500).send({
                message: "error al modificar"
            })
        }
    )
}



//eliminar algun producto

exports.deleteOne = (req, res) => {

    productModel.findByIdAndRemove(req.params.id).then(
        productDeleted => {
            res.send(productDeleted)
        }
    ).catch(
        error => {
            return res.status(500).send({
                message: ' no se eliminó ninguna categoria'
            })
        }
    )
}