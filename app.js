require('dotenv/config')

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3000
const app = express()
const routeNav = require('./src/index')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended:true }))
app.use(cors())
app.use('/', routeNav)

app.listen(port, function(){
    console.log(`Server is running on port ${port}`)
})

module.exports = app