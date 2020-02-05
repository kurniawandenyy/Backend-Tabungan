const uuid = require('uuid/v4')
const model = require('../models/tabungan')

module.exports = {
    getTabungan: (req, res) => {
        model.getTabungan()
        .then(result => {
            res.status(200).json({ result })
        })
        .catch(err => {
            res.json({ err })
        })
    },
    addTabungan: (req, res) => {
        const { tipe, jumlah, judul } = req.body
        const id = uuid()
        const data = { id, tipe, jumlah, judul }

        model.addTabungan(data)
        .then(result => {
            res.json({ result })
        })
        .catch(err => {
            res.json({ err })
        })
    },
    editTabungan: (req, res) => {
        const { tipe, jumlah, judul } = req.body
        const id = req.params.id
        const data = {tipe, jumlah, judul}

        model.editTabungan(id, data)
        .then(result => {
            res.json({ result })
        })
        .catch(err => {
            res.json({ err })
        })
    },
    deleteTabungan: (req, res) => {
        const id = req.params.id

        model.deleteTabungan(id)
        .then(result => {
            res.json({ result })
        })
        .catch(err => {
            res.json({ err })
        })
    }
}