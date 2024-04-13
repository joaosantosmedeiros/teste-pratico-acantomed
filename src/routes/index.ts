import { Router } from 'express';
import pacient from './pacient.route';

const router = Router();
router.use('/pacient', pacient);

export default router;
