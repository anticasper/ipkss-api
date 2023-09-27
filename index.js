require('dotenv').config()
const express = require('express')
let app = express()
const port = process.env.APP_PORT | 4000

const setupRoutes = require('./src/config/setupRoutes')

app = setupRoutes.loadRoutes(app)

app.listen(port, () => {
  const date = new Date().toJSON()
  console.log(`Server Up - ${date}`)
})
