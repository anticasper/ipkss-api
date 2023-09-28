const request = require('supertest')
const app = require('../../app')

describe('Test Routes', () => {
  it('Deve responder com o status 200', async () => {
    const response = await request(app).get('/')
    expect(response.statusCode).toBe(200)
  })

  it('Reset state before starting tests', async () => {
    const response = await request(app).post('/reset')
    expect(response.statusCode).toBe(200)
  })

  it('Get balance for non-existing account', async () => {
    const response = await request(app).get('/balance?account_id=1234')
    expect(response.statusCode).toBe(404)
  })

  it('Create account with initial balance', async () => {
    const object = { type: 'deposit', destination: '100', amount: 10 }

    const response = await request(app).post('/event').send(object)
    expect(response.statusCode).toBe(201)
    expect(response.body).toEqual({ destination: { id: '100', balance: 10 } })
  })

  it('Deposit into existing account', async () => {
    const object = { type: 'deposit', destination: '100', amount: 10 }

    const response = await request(app).post('/event').send(object)
    expect(response.statusCode).toBe(201)
    expect(response.body).toEqual({ destination: { id: '100', balance: 20 } })
  })

  it('Get balance for existing account', async () => {
    const response = await request(app).get('/balance?account_id=100')
    expect(response.statusCode).toBe(200)
    expect(response.text).toEqual('20')
  })

  it('Withdraw from non-existing account', async () => {
    const object = { type: 'withdraw', origin: '200', amount: 10 }

    const response = await request(app).post('/event').send(object)
    expect(response.statusCode).toBe(404)
  })

  it('Withdraw from existing account', async () => {
    const object = { type: 'withdraw', origin: '100', amount: 5 }

    const response = await request(app).post('/event').send(object)
    expect(response.statusCode).toBe(201)
    expect(response.body).toEqual({ origin: { id: '100', balance: 15 } })
  })

  it('Transfer from existing account', async () => {
    const object = { type: 'transfer', origin: '100', amount: 15, destination: '300' }

    const response = await request(app).post('/event').send(object)
    expect(response.statusCode).toBe(201)
    expect(response.body).toEqual({ origin: { id: '100', balance: 0 }, destination: { id: '300', balance: 15 } })
  })

  it('Transfer from non-existing account', async () => {
    const object = { type: 'transfer', origin: '200', amount: 15, destination: '300' }

    const response = await request(app).post('/event').send(object)
    expect(response.statusCode).toBe(404)
  })
})
