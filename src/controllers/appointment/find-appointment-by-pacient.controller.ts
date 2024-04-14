import { Response, Request } from 'express';
import { FindAppointmentByPacientUsecase } from '../../usecases/appointment/find-appointment-by-pacient.usecase';

export class FindAppointmentByPacientController {
  static async findByPacient(req: Request, res: Response) {
    const cpf = req.params.cpf;
    try {
      const appointments = await FindAppointmentByPacientUsecase.execute(cpf);

      return res.json({
        message: 'Listing all pacient appointments.',
        data: appointments,
      });
    } catch (err: any) {
      switch (err.message) {
        case 'PACIENT_NOT_FOUND':
          return res.status(404).json({
            message: 'Pacient not found.',
          });
        default:
          return res.status(500).json({
            message: 'Internal server error.',
          });
      }
    }
  }
}
