module.exports = (app) => {
    const clientesController = require('../controllers/clientesController')


    app.post('/clientes/create', clientesController.create)
    app.put('/clientes/update/:id', clientesController.update)
    app.get('/clientes/getAll',clientesController.findAll)
    app.delete('/clientes/deleteOne/:id',clientesController.deleteOne)
}
