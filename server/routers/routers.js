/* eslint-disable linebreak-style */
import express from 'express';
import swaggerUI from 'swagger-ui-express';
import welcome from '../controllers/user';
import swagger from '../../swagger.json';

const router = express.Router();

router.get('/', welcome);

router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swagger));
// router.get('/api-docs', (req, res) => {
//     return res.json({ message: "this works!" });
// });

export default router;
