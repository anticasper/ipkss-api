const facade = require('../facade/balance')

const get = (req, res) => {
  const params = req.query?.account_id

  if (!params) {
    return res.sendStatus(404)
  }

  const data = facade.get(params)

  if (!data) {
    return res.status(404).send('0')
  }
  return res.status(200).send(data.toString())
}

module.exports = { get }
