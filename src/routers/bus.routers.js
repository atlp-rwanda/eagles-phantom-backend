import { Router } from 'express';
import controllers from '../controllers/busController';
import { validateBusInfo, validateBusUpdate } from '../middleware/bus.validation';
import swagger from '../swagger/index';
import isAdmin from '../middleware/isAdmin';
import checkUser from '../middleware/checkUser';

const router = Router();

/**
 * @swagger
 * /api/v1/buses:
 *   post:
 *     tags:
 *       - Buses
 *     summary: create a bus
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
 *     summary: get all buses
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
router.get('/buses', checkUser, isAdmin, controllers.getAllBuses);

/**
 * @swagger
 * /api/v1/buses/{id}:
 *   get:
 *     tags:
 *       - Buses
 *     summary: get Bus by Id
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
 *     summary: update Bus
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
 *     summary: delete Bus
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

router.use('/api-docs', swagger);

module.exports = router;
