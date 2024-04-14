import { Router } from 'express';
import { CreateAppointmentController } from '../controllers/appointment/create-appointment.controller';
import { ListAppointmentsController } from '../controllers/appointment/list-appointments.controller';

const router = Router();

router.post('/', CreateAppointmentController.create);
router.get('/', ListAppointmentsController.list);

export default router;
