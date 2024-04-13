import { Request, Response } from 'express';
import { DeletePacientUsecase } from '../../usecases/pacient/delete-pacient.usecase';

export class DeletePacientController {
  static async delete(req: Request, res: Response) {
    try {
      await DeletePacientUsecase.execute(req.params.cpf);
      return res.status(204).json({});
    } catch (err: any) {
      switch (err.message) {
        case 'NOT_FOUND':
          return res.status(404).json({
            message: 'Pacient not found.',
          });
        default:
          console.log(err);
          return res.status(500).json({
            message: 'Internal server error.',
          });
      }
    }
  }
}
