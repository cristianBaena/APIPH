const categoryModel = require('../models/Category')//vamos a utilizar el modelo de category


/**
 * metodo para crear una nueva categoria
 * @param {*} req => todo los datos e informacion que el metodo va a recibir
 * @param {*} res => todo lo que nosotros le vamos a devolver al usuario
 */
exports.create = (req, res) => {
    console.log('Que tiene el body', req.body)
    const category = new categoryModel({
        gama: req.body.gama,
        material: req.body.material,
        uso: req.body.uso
    })

    category.save().then(
        data => {
            res.send(data)
        }
    ).catch(
        error => {
            return res.status(500).send({
                message: error.message
            })
        }
    )
}


/**
 * metodo para listar todas las categorias
 * @param {*} req 
 * @param {*} res 
 */
exports.findAll = (req, res) => {
    categoryModel.find().then(
        categories => {
            res.send(categories)
        }
    ).catch(
        error => {
            return res.status(500).send({
                message: 'error al listar las categorias'
            })
        }
    )

}



/**
 * metodo para modificar una categoria 
 * @param {*} req 
 * @param {*} res 
 */

exports.update = (req, res) => {
    const category = {
        gama: req.body.gama,
        material: req.body.material,
        uso: req.body.uso
        //ojo aqui poner las demas categorias
    }

    /*el findByAndUpdate debe tener 3 parametros:
    1.a quien quiero modificar
    2.por quien lo quiero modificar
    3. opcional, indica que los datos que se van a devolver son actualizados */

    categoryModel.findByIdAndUpdate(req.params.id, category, { new: true }).then(
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


/**
 * metodo para eliminar una categoria
 * @param {*} req 
 * @param {*} res 
 */

exports.deleteOne = (req, res) => {
    /**
     * el findByIdAndRemove recibe un parametro
     */
    categoryModel.findByIdAndRemove(req.params.id).then(
        categoryDeleted => {
            res.send(categoryDeleted)
        }
    ).catch(
        error => {
            return res.status(500).send({
                message: ' no se eliminó ninguna categoria'
            })
        }
    )
}