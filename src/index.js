const express = require('express')
const Route = express.Router()
const tabungan = require('./routes/tabungan')
const welcome = require('./routes/welcome')

Route
    .use('/api/v1/tabungan', tabungan)
    .use('*', welcome)

module.exports = Route