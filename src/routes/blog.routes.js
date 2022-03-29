module.exports = (app) => {
    const router = require('express').Router()
    const blog = require('../controllers/blog.controller')
    router.get('/create', blog.create)
    app.use('/blog', router)
}