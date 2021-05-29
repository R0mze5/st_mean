import request from 'supertest';
import { createExpressServer } from '@server';

describe('Express Server', () => {
  const app = createExpressServer(3003);

  describe('GET /', () => {
    it('should return 200 OK', async () => {
      const res = await request(app).get('/');

      return expect(res.status).toEqual(200);
    });
  });

  app.close();
});
