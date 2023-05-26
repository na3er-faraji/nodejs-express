import { Router } from 'express';

const router = Router();
import  favorite from './index'

router.use('/favorite', favorite)

export default router;
