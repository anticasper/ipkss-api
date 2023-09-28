const express = require('express')

let app = express()

const setupRoutes = require('./src/config/setupRoutes')

app.use(express.json())

app = setupRoutes.loadRoutes(app)

module.exports = app
