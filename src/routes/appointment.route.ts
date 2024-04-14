import { Router } from 'express';
import { CreateAppointmentController } from '../controllers/appointment/create-appointment.controller';
import { ListAppointmentsController } from '../controllers/appointment/list-appointments.controller';
import { FindAppointmentByPacientController } from '../controllers/appointment/find-appointment-by-pacient.controller';
import { DeleteAppointmentController } from '../controllers/appointment/delete-appointment.controller';
import { FindAppointmentByIdController } from '../controllers/appointment/find-appointment-by-id.controller';

const router = Router();

router.post('/', CreateAppointmentController.create);
router.get('/', ListAppointmentsController.list);
router.get('/:id', FindAppointmentByIdController.findById);
router.get('/pacient/:cpf', FindAppointmentByPacientController.findByPacient);
router.delete('/:id', DeleteAppointmentController.delete);

export default router;
