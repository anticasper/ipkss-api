require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.APP_PORT | 4000

app.listen(port, () => {
  const date = new Date().toJSON()
  console.log(`Server Up - ${date}`)
})
