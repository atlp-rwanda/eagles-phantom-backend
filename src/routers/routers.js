import express from 'express';
import welcome from '../controllers/user';
import login from '../controllers/controller';
import logout from '../controllers/logout';
import getInfo from '../controllers/info';
import auth from '../middlewares/auth';
import swagger from '../swagger/index';

const router = express.Router();

router.get('/', welcome);
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

router.post('/v1/auth/login', login);
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
router.get("/logout",auth.auth,logout);

/**
 * @swagger
 * /logout:
 *   get:
 *     tags:
 *       - Log-out
 *     name: logout
 *     summary: Log out auth-user
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     responses:
 *       '200':
 *             description: User is successfully logged out
 * */


router.get("/drivers/info",auth.auth,getInfo);

/**
 * @swagger
 * /drivers/info:
 *   get:
 *     tags:
 *       - Driver-info
 *     name: drivers
 *     summary: info on driver
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     responses:
 *       '200':
 *             description: info is available for you
 * */

//router.post('/v1/auth/login', login);




router.use('/api-docs', swagger);

export default router;
