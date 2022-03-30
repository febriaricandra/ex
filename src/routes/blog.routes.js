module.exports = (app) => {
    const router = require('express').Router()
    const blog = require('../controllers/blog.controller')

    //method
    router.get('/create', blog.create)
    router.post('/', blog.store)
    router.get('/:id', blog.show)
    app.use('/blog', router)
}