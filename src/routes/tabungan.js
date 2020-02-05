const express = require('express')
const Route = express.Router()
const tabunganController = require('../controllers/tabungan')

Route
    .get('/', tabunganController.getTabungan)
    .post('/', tabunganController.addTabungan)
    .put('/:id', tabunganController.editTabungan)
    .delete('/:id', tabunganController.deleteTabungan)

module.exports = Route