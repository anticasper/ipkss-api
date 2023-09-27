const api = require('../api/event')

const add = (app) => {
  app.route('/event').post(api.insert)
  return app
}

module.exports = { add }
