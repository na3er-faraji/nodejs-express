
import { Router } from 'express';

const router = Router();
import simulator from './index'

router.use('/simulator', simulator)

export default router;
