import { Router } from 'express';

const router = Router();
import profile from './index'

router.use('/profile', profile)

export default router;
