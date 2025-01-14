const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/budget')

const db = mongoose.connection

db.once('open', () => {
    console.log(`Mongoose connected at ${db.host}:${db.port}`)
})

db.on('error', (err) => {
    console.log(`Database error: \n ${err}`)
})

module.exports.Category = require('./category')