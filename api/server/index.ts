import express from 'express';

import { config as dotEnvConfig } from 'dotenv';

dotEnvConfig();

const PORT = parseInt(process.env.EXPRESS_PORT || '3000', 10);
const DEV = process.env.NODE_ENV !== 'production';
const HOST = '0.0.0.0';

export const createExpressServer = (port?: number) => {
  const app = express();

  app.get('/', (_req, res) => {
    res.send('Hi');
  });

  return app.listen(port || PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`> Server listening at http://${HOST}:${PORT} as ${
      DEV ? 'development' : process.env.NODE_ENV
    }`);
  });
};
