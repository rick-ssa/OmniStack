const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://rick:kcir3333@cluster0-sz16m.mongodb.net/omniStack?retryWrites=true&w=majority',{
    useNewUrlParser: true
});

server.use(express.json())
server.use(routes)

server .listen(3333);