module.exports = (app) => {
     const productController = require('../controllers/productController')

   
    app.post('/product/create', productController.create)
    app.get('/product/getAll', productController.findAll)
    app.put('/product/update/:id', productController.update)
    app.delete('/product/deleteOne/:id',productController.deleteOne)
}