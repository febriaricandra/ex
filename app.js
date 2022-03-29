const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const app = express()

app.set('views', './src/views')
app.set('view engine', 'ejs')

require('./src/routes/home.routes')(app)
require('./src/routes/blog.routes')(app)

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

const PORT = 5000

app.listen(PORT, ()=>{
    console.log(`starting development server: http://localhost:${PORT}`)
})