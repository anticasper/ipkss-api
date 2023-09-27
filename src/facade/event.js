const dbo = require('../dbo/data')

const insert = (object) => {
  if (!object || !object.type) {
    return false
  }

  if (object.type === 'deposit') {
    return deposit(object)
  }

  if (object.type === 'withdraw') {
    return withdraw(object)
  }

  if (object.type === 'transfer') {
    const from = withdraw(object)

    if (!from) {
      return false
    }

    const to = deposit(object)

    return { origin: from.origin, destination: to.destination }
  }

  return false
}

const deposit = (object) => {
  if (!dbo.get(object.destination)) {
    const newEvent = {
      id: object.destination,
      balance: object.amount,
    }
    dbo.insert(newEvent)
    return { destination: newEvent }
  }

  dbo.deposit(object.destination, object.amount)

  const data = dbo.get(object.destination)

  if (!data) {
    return false
  }
  return { destination: data }
}

const withdraw = (object) => {
  let data = dbo.get(object.origin)
  if (!data) {
    return false
  }

  dbo.withdraw(object.origin, object.amount)

  data = dbo.get(object.origin)

  if (!data) {
    return false
  }
  return { origin: data }
}

module.exports = { insert }
