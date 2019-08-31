const express = require('express')
const devController = require('./controllers/devController')
const routes = express.Router();

routes.get('/',(req,res)=>{
    res.send('hi')
})

routes.post('/devs',devController.store)

module.exports = routes;