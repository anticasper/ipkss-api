require('dotenv').config()
const port = process.env.APP_PORT | 4000
const app = require('./app')

app.listen(port, () => {
  const date = new Date().toJSON()
  console.log(`Server Up - ${date}`)
})
