require('dotenv').config()
const express = require('express')
const port = process.env.APP_PORT | 4000

let app = express()

const setupRoutes = require('./src/config/setupRoutes')

app.use(express.json())

app = setupRoutes.loadRoutes(app)

app.listen(port, () => {
  const date = new Date().toJSON()
  console.log(`Server Up - ${date}`)
})
