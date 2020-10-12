import express from 'express';
import welcome from '../controllers/user';
<<<<<<< HEAD
// import translator from '../languages/config.js';
=======
import login from '../controllers/controller';
import logout from '../controllers/logout';
import getInfo from '../controllers/info';
import auth from '../Middlewares/auth';
>>>>>>> 14f988b... ft(logout):log-out-users-#qgAq5WKe
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
/login:
*   post:
*     description: Display welcome message
*     produces:
*       - application/json
*     responses:
*       200:
*         description:Welcome to phantom, a platform to facilitate the transportation mode in town!.
/logout:
*   get:
*     description: Display welcome message
*     produces:
*       - application/json
*     responses:
*       200:
*         description:Welcome to phantom, a platform to facilitate the transportation mode in town!.
/drivers/info:
*   get:
*     description: Display welcome message
*     produces:
*       - application/json
*     responses:
*       200:
*         description:Welcome to phantom, a platform to facilitate the transportation mode in town!.
*/



router.get('/', welcome);

router.post('/login', login);
router.get("/logout",auth.auth,logout);
router.get("/drivers/info",auth.auth,getInfo);
router.use('/api-docs', swagger);

export default router;