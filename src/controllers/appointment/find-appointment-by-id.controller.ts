import { Request, Response } from 'express';
import { FindAppointmentByIdUsecase } from '../../usecases/appointment/find-appointment-by-id.usecase';

export class FindAppointmentByIdController {
  static async findById(req: Request, res: Response) {
    const id = req.params.id;
    try {
      const appointment = await FindAppointmentByIdUsecase.execute(id);
      return res.json({
        message: 'Appointment found successfully.',
        data: appointment,
      });
    } catch (err: any) {
      switch (err.message) {
        case 'NOT_FOUND':
          return res.status(404).json({
            message: 'Appointment not found.',
          });
        default:
          return res.status(500).json({
            message: 'Internal server error.',
          });
      }
    }
  }
}
