const express = require('express') 
const bodyParser = require('body-parser')
const { connectToDB} = require('./db')

const app = express() //convertimos express en un objeto para poder manejar
//app. lo utilizamos para levantar nuestro primer servidor


app.use(bodyParser.json())
connectToDB()

require('./Routes/category')(app)
require('./Routes/product')(app)

app.listen( 3000, () => {
    console.log('nos conectamos exitosamente')
})