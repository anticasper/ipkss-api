let data = []

const reset = () => {
  data = []
}

const get = (id) => {
  return data.find((el) => {
    return id === el.id
  })
}

const insert = (event) => {
  data.push(event)
}

const remove = (id) => {
  const index = getIndex(id)
  if (!index) {
    return false
  }
  data.splice(index, 1)
}

const deposit = (id, value) => {
  const index = getIndex(id)

  if (!index && index !== 0) {
    return false
  }
  data[index].balance += value
}

const withdraw = (id, value) => {
  const index = getIndex(id)
  if (!index && index !== 0) {
    return false
  }
  data[index].balance -= value
}

const getIndex = (id) => {
  for (let i = 0; i < data.length; i++) {
    const element = data[i]
    if (element.id === id) {
      return i
    }
  }
  return false
}

module.exports = { reset, get, insert, remove, deposit, withdraw }
