const api = require('../api/reset')

const add = (app) => {
  app.route('/reset').post(api.controller)
  return app
}

module.exports = { add }
