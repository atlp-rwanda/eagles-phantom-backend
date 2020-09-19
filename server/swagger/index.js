import swaggerJSDoc from 'swagger-jsdoc';
import swaggerui from 'swagger-ui-express';
<<<<<<< HEAD
import os from 'os';
=======
<<<<<<< HEAD
import os from 'os';
=======
>>>>>>> ecafcd9... chore(welcome): welcome endpoint
>>>>>>> d34cfe0... chore(welcome): welcome endpoint
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d34cfe0... chore(welcome): welcome endpoint
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
<<<<<<< HEAD
=======
=======
  },
  apis: ['./server/swagger/*.swagger.js'],
>>>>>>> ecafcd9... chore(welcome): welcome endpoint
>>>>>>> d34cfe0... chore(welcome): welcome endpoint
};

const swaggerDocument = swaggerJSDoc(swaggerDefinition);

router.use('/', swaggerui.serve, swaggerui.setup(swaggerDocument));

export default router;
