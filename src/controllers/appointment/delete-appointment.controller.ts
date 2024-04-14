import { Request, Response } from 'express';
import { DeleteAppointmentUsecase } from '../../usecases/appointment/delete-appointment.usecase';

export class DeleteAppointmentController {
  static async delete(req: Request, res: Response) {
    const id = req.params.id;
    try {
      await DeleteAppointmentUsecase.execute(id);
      return res.status(204).json();
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
