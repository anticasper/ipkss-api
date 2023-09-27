const dbo = require('../dbo/data')

const get = (id) => {
  if (!id) {
    return false
  }

  const data = dbo.get(id)

  if (!data) {
    return false
  }
  return data.balance
}

module.exports = { get }
