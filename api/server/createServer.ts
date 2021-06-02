import express from 'express';

import path from 'path';

import { config as dotEnvConfig } from 'dotenv';

import bodyParser from 'body-parser';
import cors from 'cors';
import { personRouter } from './route';

dotEnvConfig();

const PORT = parseInt(process.env.EXPRESS_PORT || '3000', 10);
const DEV = process.env.NODE_ENV !== 'production';
const HOST = '127.0.0.1';

const publicOptions = {};

export const createExpressServer = (port: number = PORT) => {
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());

  app.use(express.static(path.join(__dirname, '../public'), publicOptions));

  app.get('/', (_req, res) => {
    res.status(200).send('Hi');
  });

  app.post('/a', (req, res) => {
    res.status(201).send(req.body.name);
  });

  app.use('/person', personRouter);

  return app.listen(port, HOST, () => {
    // eslint-disable-next-line no-console
    console.log(`> Server listening at http://${HOST}:${port} as ${
      DEV ? 'development' : process.env.NODE_ENV
    }`);
  });
};
