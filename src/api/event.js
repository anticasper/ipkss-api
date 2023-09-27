const facade = require('../facade/event')

const insert = (req, res) => {
  const body = req.body

  if (!body) {
    return res.sendStatus(404)
  }

  const data = facade.insert(body)
  if (!data) {
    return res.status(404).send('0')
  }
  return res.status(201).send(data)
}

module.exports = { insert }
