//load express
const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const app = express()
//connect to mongodb using mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27107/ex',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
// set file
app.set('views', './src/views')
app.set('view engine', 'ejs')

// register routes
require('./src/routes/home.routes')(app)
require('./src/routes/blog.routes')(app)

// register public static
app.use(express.urlencoded({
    extended: false
}))
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))


// add port localhost
const PORT = 5000

app.listen(PORT, ()=>{
    console.log(`starting development server: http://localhost:${PORT}`)
})