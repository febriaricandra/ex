const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const app = express()

app.set('views', './src/views')
app.set('view engine', 'ejs')

require('./src/routes/home.routes')(app)


const PORT = 5000

app.listen(PORT, ()=>{
    console.log(`starting development server: http://localhost:${PORT}`)
})