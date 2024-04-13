import { Request, Response } from 'express';
import { ListPacientsUsecase } from '../../usecases/pacient/list-pacients.usecase';

export class ListPacientsController {
  static async list(req: Request, res: Response) {
    const pacients = await ListPacientsUsecase.execute();
    return res.json({
      message: 'Listing all patients.',
      data: pacients.map((pacient) => ({
        id: pacient.id,
        name: pacient.name,
        email: pacient.email,
        cpf: pacient.cpf,
      })),
    });
  }
}
