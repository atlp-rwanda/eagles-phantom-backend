import swaggerJSDoc from 'swagger-jsdoc';
import swaggerui from 'swagger-ui-express';
import os from 'os';
import { Router } from 'express';
import dotenv from 'dotenv';

dotenv.config();

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
      url: 'http://localhost:4000',
      name: `${os.hostname()}`,
    },
    {
      url: `https://${process.env.HEROKU_APP_NAME}.herokuapp.com`,
      name: `${os.hostname()}`,
    },
    ],
  },
  apis: ['./server/routers/routers.js'],
};

const swaggerDocument = swaggerJSDoc(swaggerDefinition);

router.use('/', swaggerui.serve, swaggerui.setup(swaggerDocument));

export default router;
