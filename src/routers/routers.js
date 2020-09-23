import express from 'express';
import welcome from '../controllers/user';
// import translator from '../languages/config.js';
import swagger from '../swagger/index';

const router = express.Router();

/**
 * @swagger
* /:
*   get:
*     description: Display welcome message
*     produces:
*       - application/json
*     responses:
*       200:
*         description:Welcome to phantom, a platform to facilitate the transportation mode in town!.
*/

router.get('/', welcome);

router.use('/api-docs', swagger);

// router.get('/?lang=fr', translator);

export default router;
