const mongoose = require('mongoose');

function connect() {
    mongoose
        .connect('mongodb://localhost/fullstack', {useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log('Conectado ao db')
        }).catch((error) => {
            console.log(`Não conectado ${error}`)
        })
}

module.exports = connect();