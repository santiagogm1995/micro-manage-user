import request from 'supertest';
import app from './../src/server.js';

describe('Sample Test', () => {
    it('Test all endpoints', async () => {
        const res = await request(app)
      .get('/users')
      expect(res.statusCode).toEqual(200)
    })
  })