import express from 'express';
import welcome from '../controllers/Welcome';

const router = express.Router();

/**
* @swagger
* /:
*   get:
*     description: Display welcome message
*     produces:
*       - application/json
*     consumes:
*       - application/json
*     responses:
*       '200':
*         description:Welcome to phantom, a platform to facilitate the transportation mode in town!.
* */

router.get('/', welcome);

export default router;
