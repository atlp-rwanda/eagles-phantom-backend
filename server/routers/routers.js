import express from 'express';
import welcome from '../controllers/user';

const router = express.Router();

router.get('/', welcome);

export default router;