const facade = require('../facade/reset')

const controller = (req, res) => {
  facade.reset()
  return res.sendStatus(200)
}

module.exports = { controller }
