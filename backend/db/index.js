const mongoose = require('mongoose')

mongoose
    .connect('mongodb+srv://krish123:iwantbest@cluster0.grtlp67.mongodb.net/postDB', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db