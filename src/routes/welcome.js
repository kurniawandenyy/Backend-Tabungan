const express = require('express')
const Route = express.Router()
const welcomeController = require('../controllers/welcome')

Route
    .get('/', welcomeController.getMessage)

module.exports = Route