import express from 'express';
import userController from '../controllers/userController';
import checkUser from '../middleware/checkUser';
import { validationError } from '../validations/signup';
import isAdmin from '../middleware/isAdmin';

const router = express.Router();

/**
 * @swagger
 *
 * /api/v1/auth/login:
 *   post:
 *     security: []
 *     summary: Login
 *     description: users can log into their accounts
 *     tags:
 *       - Users
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     produces:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: integer
 *               message:
 *                 type: string
 *               token: string
 *     responses:
 *       200:
 *         description: login successfully
 */

router.post('/login', userController.login);

/**
* @swagger
* /api/v1/auth/register:
*   post:
*     tags:
*       - Users
*     name: Signup
*     summary: Signup a user in a system
*     produces:
*       - application/json
*     consumes:
*       - application/json
*     parameters:
*       - name: x-access-token
*         in: header
*         description: jwt token of the user
*     requestBody:
*       content:
*         application/json:
*           schema:
*             type: object
*             properties:
*               firstname:
*                 type: string
*               lastname:
*                 type: string
*               email:
*                 type: string
*               dateofbirth:
*                 type: string
*               gender:
*                 type: string
*               address:
*                 type: string
*               role:
*                 type: string
*     responses:
*       '201':
*             description: user created successfully.
*       '400':
*             description: Bad request.
*       '409':
*             description: The email is already in the system.
* */

router.post('/register', checkUser, isAdmin, validationError, userController.signup);

export default router;