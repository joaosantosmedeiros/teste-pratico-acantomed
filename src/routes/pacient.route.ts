import { Router } from 'express';
import { CreatePacientController } from '../controllers/pacient/create-pacient.controller';
import { ListPacientsController } from '../controllers/pacient/list-pacients.controller';
import { FindPacientByCpfController } from '../controllers/pacient/find-pacient-by-cpf.controller';
import { DeletePacientController } from '../controllers/pacient/delete-pacient.controller';
import { UpdatePacientController } from '../controllers/pacient/update-pacient.controller';

const router = Router();

router.get('/', ListPacientsController.list);
router.get('/:cpf', FindPacientByCpfController.findByCpf);
router.post('/', CreatePacientController.create);
router.put('/:cpf', UpdatePacientController.update);
router.delete('/:cpf', DeletePacientController.delete);

export default router;
