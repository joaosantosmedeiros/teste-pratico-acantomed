import { Router } from 'express';
import { CreatePacientController } from '../controllers/pacient/create-pacient.controller';
import { ListPacientsController } from '../controllers/pacient/list-pacients.controller';
import { FindPacientByCpfController } from '../controllers/pacient/find-pacient-by-cpf.controller';

const router = Router();

router.get('/', ListPacientsController.list);
router.get('/:cpf', FindPacientByCpfController.findByCpf);
router.post('/', CreatePacientController.create);

export default router;
