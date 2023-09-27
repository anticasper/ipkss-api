const fs = require('fs')

const routePath = '../routes/'

const loadRoutes = (app) => {
  const fileList = fs.readdirSync('./src/routes')
  for (let i = 0; i < fileList.length; i++) {
    const file = fileList[i]
    const routes = require(routePath + file)
    app = routes.add(app)
  }
  return app
}

module.exports = { loadRoutes }
