const mongoose = require('mongoose')//vamos a utilizar la libreria mongoose

const connectToDB = () => {

    mongoose.connect('mongodb://127.0.0.1:27017/premiumhelmets', { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {

        if(error){

            console.log('Tenemos un error ', error)

        }else{

            console.log('Nos conectamos a la DB')

        }

    } )

}

module.exports = {connectToDB}