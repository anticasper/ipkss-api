const api = require('../api/balance')

const add = (app) => {
  app.route('/balance').get(api.get)
  return app
}

module.exports = { add }
