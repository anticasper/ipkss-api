const dbo = require('../dbo/data')

const reset = () => {
  return dbo.reset()
}

module.exports = { reset }
