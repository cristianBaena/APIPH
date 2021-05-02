module.exports = (app) => {
    const categoryController = require('../controllers/categoryController')

    /**
     * verbos del protocolo http
     * post: se utiliza para almacenar informacion y trabajar con el login
     * get: se utiliza para obtener infromacion -> por medio de la url
     * put : se utiliza para modificar la informacion -> por medio de la url pero la informacion respecto a quien quiero modificar
     * delete: se utiliza para eliminar la infromacion y tambien por medio de la url
     */
    
    app.post('/category/create', categoryController.create)
    app.put('/category/update/:id', categoryController.update)
    app.get('/category/getAll',categoryController.findAll)
    app.delete('/category/deleteOne/:id',categoryController.deleteOne)
}







