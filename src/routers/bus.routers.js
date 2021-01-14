import { Router } from 'express';
// import controllers from '../controllers/busController';
import controllers from '../controllers/bus.controller';
import { validateBusInfo, validateBusUpdate } from '../middleware/bus.validation';
import swagger from '../swagger/index';
import isAdmin from '../middleware/isAdmin';
import checkUser from '../middleware/checkUser';
import emailValidation from '../validations/emailValidation';
import checkExist from '../middleware/checkExist';
import isAdminOrOperator from '../middleware/isAdminOrOperator';
import { viewBusValidation } from '../validations/bus.validator';

const router = Router();

/**
 * @swagger
 * /api/v1/buses:
 *   post:
 *     tags:
 *       - Buses
 *     name: Create Buses
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
 *               busPlate:
 *                 type: string
 *               busStatus:
 *                 type: string
 *               busLocation:
 *                 type: string
 *               busCompany:
 *                 type: string
 *               busSeats:
 *                 type: integer
 *           required:
 *             - busPlate
 *             - busStatus
 *             - busLocation
 *             - busCompany
 *             - busSeats
 *     responses:
 *       '200':
 *             description: Bus created successfull.
 *       '403':
 *             description: Bus already exists in the system.
 * */

router.post('/buses', checkUser, isAdmin, [validateBusInfo], controllers.createBus);
/**
 * @swagger
 * /api/v1/buses?page={page}&limit={limit}:
 *   get:
 *     tags:
 *       - Buses
 *     name: Retrieve all Buses
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: x-access-token
 *         in: header
 *         description: jwt token of the user
 *       - in: path
 *         name: page
 *         required: true
 *         type: integer
 *         default: 1
 *         description: Enter page number
 *       - in: path
 *         name: limit
 *         required: true
 *         type: integer
 *         default: 10
 *         description: Enter limit number of buses per page
 *     responses:
 *       '200':
 *             description: Buses retrieved successufully.
 *       '403':
 *             description: There are no buses registered in the system.
 *       '400':
 *             description: The bus you're trying to reach doesn't exist.
 */
router.get('/buses', checkUser, controllers.getAllBuses);
/**
 * @swagger
 * /api/v1/buses/{id}:
 *   get:
 *     tags:
 *       - Buses
 *     name: Retrieve a Bus
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         schema:
 *           type: integer
 *         required: true
 *         description: id of the bus
 *       - name: x-access-token
 *         in: header
 *         description: jwt token of the user
 *     responses:
 *       '200':
 *             description: Bus retrieved successufully.
 *       '403':
 *             description: There's no bus registered in the system.
 * */
router.get('/buses/:id', checkUser, isAdmin, controllers.getBusById);
/**
 * @swagger
 * /api/v1/buses/{id}:
 *   patch:
 *     tags:
 *       - Buses
 *     name: Update Buses
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         schema:
 *           type: integer
 *         required: true
 *         description: id of the bus
 *       - name: x-access-token
 *         in: header
 *         description: jwt token of the user
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               busPlate:
 *                 type: string
 *               busStatus:
 *                 type: string
 *               busLocation:
 *                 type: string
 *               busCompany:
 *                 type: string
 *               busSeats:
 *                 type: integer
 *           required:
 *             - busPlate
 *             - busStatus
 *             - busLocation
 *             - busCompany
 *             - busSeats
 *     responses:
 *       '200':
 *             description: Bus created successfull.
 *       '403':
 *             description: Bus already exists in the system.
 * */

router.patch('/buses/:id', checkUser, isAdmin, [validateBusUpdate], controllers.updateBus);
/**
 * @swagger
 * /api/v1/buses/{id}:
 *   delete:
 *     tags:
 *       - Buses
 *     name: Delete Buses
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         in: path
 *         schema:
 *           type: integer
 *         required: true
 *         description: id of the bus
 *       - name: x-access-token
 *         in: header
 *         description: jwt token of the user
 *     responses:
 *       '200':
 *             description: Bus deleted successfull.
 *       '403':
 *             description: The bus you're trying to delete doesn't exist in the system.
 * */
router.delete('/buses/:id', checkUser, isAdmin, controllers.deleteBus);

/**
 * @swagger
 *
 * /api/v1/assignDriver/{id}:
 *  patch:
 *    summary: Assign driver to bus
 *    description: Return assigned bus
 *    tags:
 *    - Assign driver to bus
 *    parameters:
 *    - in: header
 *      name: x-access-token
 *      required: true
 *      type: string
 *      description: token to authorize
 *    - in: path
 *      name: id
 *      required: true
 *      type: integer
 *      description: Enter bus id
 *    requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *    responses:
 *     200:
 *      description: Assigned Successfully
 */

router.patch(
  '/assignDriver/:id',
  checkUser,
  isAdminOrOperator,
  emailValidation,
  checkExist.ckeckUserEmail,
  checkExist.checkID,
  checkExist.checkRole,
  checkExist.checkDriverAssigned,
  checkExist.checkAssigned,
  controllers.assignDriver,
);

/**
 * @swagger
 *
 * /api/v1/unassignDriver/{id}:
 *  patch:
 *    summary: Unassign driver to bus
 *    description: Return unassigned bus
 *    tags:
 *    - Assign driver to bus
 *    parameters:
 *    - in: header
 *      name: x-access-token
 *      required: true
 *      type: string
 *      description: token to authorize
 *    - in: path
 *      name: id
 *      required: true
 *      type: integer
 *      description: Enter bus id
 *    requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *    responses:
 *     200:
 *      description: Unassigned Successfully
 */

router.patch(
  '/unassigndriver/:id',
  emailValidation,
  checkUser,
  isAdminOrOperator,
  checkExist.ckeckUserEmail,
  checkExist.checkAssignment,
  controllers.unassignDriver,
);

/**
 * @swagger
 *
 * /api/v1/assignedbuses?page={page}&limit={limit}:
 *  get:
 *    summary: Get assigned bus by page and limit
 *    description: Retrieve assigned bus by page and limit
 *    tags:
 *    - Assign driver to bus
 *    parameters:
 *    - in: header
 *      name: x-access-token
 *      required: true
 *      type: string
 *      description: token to authorize
 *    - in: path
 *      name: page
 *      required: true
 *      type: integer
 *      default: 1
 *      description: Enter page number
 *    - in: path
 *      name: limit
 *      required: true
 *      type: integer
 *      default: 10
 *      description: Enter limit number of buses per page
 *    responses:
 *     200:
 *      description: Retrieved Successfully
 */
router.get(
  '/assignedbuses',
  checkUser,
  isAdminOrOperator,
  controllers.getAssignedBuses,
);

/**
 * @swagger
 *
 * /api/v1/bus/routes?origin={origin}&destination={destination}:
 *  get:
 *   summary: View a list of buses in route
 *   description: View Buses in your route
 *   tags:
 *   - Buses
 *   parameters:
 *    - in: query
 *      name: origin
 *      required: true
 *      type: string
 *      default: down-town
 *      description: Enter you origin
 *    - in: query
 *      name: destination
 *      required: true
 *      type: string
 *      default: Kabeza
 *      description: Enter your destination
 *   responses:
 *    200:
 *     description: Retrieved Buses in  your route Successfully
 *    401:
 *     description: Unauthorized
 *    400:
 *     description: Invalid inputs
 *    500:
 *     description: Internal Server Error
 */

router.get('/bus/routes', viewBusValidation, checkExist.checkRouteExist, controllers.viewListOfBuses);

router.use('/api-docs', swagger);

module.exports = router;
