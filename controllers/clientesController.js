const clientesModel = require('../models/Clientes')

exports.create = (req, res) => {
    console.log('Que tiene el body', req.body)
    const clientes = new clientesModel({
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        city: req.body.city
    })

    clientes.save().then(
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



exports.findAll = (req, res) => {
    clientesModel.find().then(
        clientes => {
            res.send(clientes)
        }
    ).catch(
        error => {
            return res.status(500).send({
                message: 'error al listar las categorias'
            })
        }
    )

}



exports.update = (req, res) => {
    const clientes = {
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
        city: req.body.city
    }

    /*el findByAndUpdate debe tener 3 parametros:
    1.a quien quiero modificar
    2.por quien lo quiero modificar
    3. opcional, indica que los datos que se van a devolver son actualizados */

    clientesModel.findByIdAndUpdate(req.params.id, clientes, { new: true }).then(
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




exports.deleteOne = (req, res) => {
    /**
     * el findByIdAndRemove recibe un parametro
     */
    clientesModel.findByIdAndRemove(req.params.id).then(
        clientesDeleted => {
            res.send(clientesDeleted)
        }
    ).catch(
        error => {
            return res.status(500).send({
                message: ' no se eliminó ninguna categoria'
            })
        }
    )
}