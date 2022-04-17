const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const path = require('path')

const linkRoute = require('./routes/linkRoute')



mongoose.connect('mongodb://localhost/links')
let db = mongoose.connection

db.on('error', () => { console.log('houve um erro') })
db.once('open', () => { console.log('Banco carregado') })

// mongoose.connect('mongodb://localhost/links', (error, db) => {
//     console.log('Banco carregando')
// })

// mongoose.connect('mongodb://localhost/links').then(db => {
//     console.log(db)
// }).catch(error => {
//     console.log(error)
// })



app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))



app.use('/', linkRoute)

app.listen(port, () => console.log(`Exaple app listening on port ${port}!`))