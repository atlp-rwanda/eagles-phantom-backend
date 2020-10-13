import express from 'express';
import welcome from '../controllers/user';
import login from '../controllers/controller';
import logout from '../controllers/logout';
import getInfo from '../controllers/info';
import auth from '../middlewares/auth';
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
/**
 * @swagger
 * /v1/auth/login:
 *   post:
 *     tags:
 *       - Sign In
 *     name: login
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: body
 *         in: body
 *         schema:
 *
 *           type: object
 *           properties:
 *             email:
 *               type: string
 *             password:
 *               type: string
 *               format: password
 *         required:
 *           - email
 *           - password
 *     responses:
 *       '200':
 *             description: Logged In successfull.
 *       '400':
 *             description: Invalid email or password.
 * */

router.get('/', welcome);
router.get("/logout",auth.auth,logout);
router.get("/drivers/info",auth.auth,getInfo);

router.post('/v1/auth/login', login);

router.use('/api-docs', swagger);

export default router;
