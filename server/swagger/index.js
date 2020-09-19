import swaggerJSDoc from 'swagger-jsdoc';
import swaggerui from 'swagger-ui-express';
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
  },
  apis: ['./server/swagger/*.swagger.js'],
};

const swaggerDocument = swaggerJSDoc(swaggerDefinition);

router.use('/', swaggerui.serve, swaggerui.setup(swaggerDocument));

export default router;
