import swaggerJSDoc from 'swagger-jsdoc';
import swaggerui from 'swagger-ui-express';
import path from 'path'
import os from 'os';

import pkg from 'express';
import dotenv from 'dotenv';

dotenv.config();

const Router = pkg;

const router = Router();

const swaggerDefinition = {
  definition: {
    info: {
      title: 'Phantom',
      version: '1.0.0',
      description:
            'We facilitate the transport of our client',
    },

    servers: [{
      url: 'http://localhost:3020',
      name: `${os.hostname()}`,
    },
    {
      url: 'https://phantom-backend2-staging.herokuapp.com',
      name: `${os.hostname()}`,
    },
    ],
  },
  apis: [
    path.resolve(__dirname, '../routers/*.js'),
    ],
};

const swaggerDocument = swaggerJSDoc(swaggerDefinition);

router.use('/', swaggerui.serve, swaggerui.setup(swaggerDocument));

export default router;

