import { Router } from 'express';
import pacient from './pacient.route';
import appointment from './appointment.route';

const router = Router();
router.use('/pacient', pacient);
router.use('/appointment', appointment);

export default router;
