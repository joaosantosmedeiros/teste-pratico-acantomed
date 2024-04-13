import { Request, Response } from 'express';
import { FindPacientByCpfUsecase } from '../../usecases/pacient/find-pacient-by-cpf.usecase';

export class FindPacientByCpfController {
  static async findByCpf(req: Request, res: Response) {
    try {
      const pacient = await FindPacientByCpfUsecase.execute(req.params.cpf);
      return res.json({
        status: 200,
        response: 'Pacient found successfully.',
        data: {
          id: pacient.id,
          name: pacient.name,
          email: pacient.email,
          cpf: pacient.cpf,
        },
      });
    } catch (error: any) {
      switch (error.message) {
        case 'NOT_FOUND':
          return res.json({
            status: 404,
            message: 'Pacient not found.',
          });
        default:
          return res.json({
            status: 500,
            message: 'Internal server error',
          });
      }
    }
  }
}
