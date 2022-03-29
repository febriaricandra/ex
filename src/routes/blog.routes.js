module.exports = (app) => {
    const router = require('express').Router()
    const blog = require('../controllers/blog.controller')

    //method
    router.get('/create', blog.create)
    router.post('/', blog.store)
    app.use('/blog', router)
}