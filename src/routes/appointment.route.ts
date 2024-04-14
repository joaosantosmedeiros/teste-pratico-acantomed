import { Router } from 'express';
import { CreateAppointmentController } from '../controllers/appointment/create-appointment.controller';
import { ListAppointmentsController } from '../controllers/appointment/list-appointments.controller';
import { FindAppointmentByPacientController } from '../controllers/appointment/find-appointment-by-pacient.controller';
import { DeleteAppointmentController } from '../controllers/appointment/delete-appointment.controller';
import { FindAppointmentByIdController } from '../controllers/appointment/find-appointment-by-id.controller';
import { UpdateAppointmentController } from '../controllers/appointment/update-appointment.controller';

const router = Router();

router.post('/', CreateAppointmentController.create);
router.get('/', ListAppointmentsController.list);
router.get('/:id', FindAppointmentByIdController.findById);
router.get('/pacient/:cpf', FindAppointmentByPacientController.findByPacient);
router.put('/:id', UpdateAppointmentController.update);
router.delete('/:id', DeleteAppointmentController.delete);

export default router;
