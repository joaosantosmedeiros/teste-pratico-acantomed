import { Router } from 'express';
import { CreateAppointmentController } from '../controllers/appointment/create-appointment.controller';
import { ListAppointmentsController } from '../controllers/appointment/list-appointments.controller';
import { FindAppointmentByPacientController } from '../controllers/appointment/find-appointment-by-pacient.controller';

const router = Router();

router.post('/', CreateAppointmentController.create);
router.get('/', ListAppointmentsController.list);
router.get('/pacient/:cpf', FindAppointmentByPacientController.findByPacient);

export default router;
