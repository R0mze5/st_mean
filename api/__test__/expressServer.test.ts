import request from 'supertest';
import { createExpressServer } from '@server/createServer';

describe('Express Server', () => {
  const app = createExpressServer(3003);

  describe('GET /', () => {
    it('should return 200 OK', async () => {
      const res = await request(app).get('/');

      return expect(res.status).toEqual(200);
    });
  });

  describe('POST /a', () => {
    it('should return 201 OK', async () => {
      const res = await request(app).post('/a').send({
        id: 1,
        name: 'Mike',
      });

      return expect(res.status).toEqual(201);
    });
  });

  describe('POST /person/create', () => {
    it('should return 201 OK', async () => {
      const res = await request(app).post('/person/create').query({
        age: 1,
        name: 'Mike',
      });

      return expect(res.status).toEqual(201);
    });

    it('should return params', async () => {
      const res = await request(app).post('/person/create').send({
        age: 1,
        name: 'Mike',
      });

      // console.log(res);

      return expect(res.status).toEqual(201);
    });
  });

  app.close();
});
