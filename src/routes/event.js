const api = require('../api/event')

const add = (app) => {
  app.route('/event').post(api.controller)

  return app
}

module.exports = { add }
