import { Router } from 'express';
import { CreatePacientController } from '../controllers/pacient/create-pacient.controller';

const router = Router();

router.post('/', CreatePacientController.create);

export default router;
