import { Router } from 'express';
import { CreatePacientController } from '../controllers/pacient/create-pacient.controller';
import { ListPacientsController } from '../controllers/pacient/list-pacients.controller';

const router = Router();

router.get('/', ListPacientsController.list);
router.post('/', CreatePacientController.create);

export default router;
