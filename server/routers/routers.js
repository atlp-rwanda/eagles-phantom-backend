import express from 'express';
import welcome from '../controllers/user';
import swagger from '../swagger/index';

const router = express.Router();

router.get('/', welcome);

router.use('/api-docs', swagger);

export default router;
