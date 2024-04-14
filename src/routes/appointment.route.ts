import { Router } from 'express';
import { CreateAppointmentController } from '../controllers/appointment/create-appointment.controller';

const router = Router();

router.post('/', CreateAppointmentController.create);

export default router;
