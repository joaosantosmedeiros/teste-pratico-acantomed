import { Request, Response } from 'express';
import { ListAppointmentsUsecase } from '../../usecases/appointment/list-appointments.usecase';

export class ListAppointmentsController {
  static async list(req: Request, res: Response) {
    const appointments = await ListAppointmentsUsecase.execute();

    return res.json({
      message: 'Listing all appointments',
      data: appointments,
    });
  }
}
