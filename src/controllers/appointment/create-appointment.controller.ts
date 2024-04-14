import { Request, Response } from 'express';
import { CreateAppointmentUsecase } from '../../usecases/appointment/create-appointment.usecase';

export class CreateAppointmentController {
  static async create(req: Request, res: Response) {
    const requiredFields = ['pacientCpf', 'type', 'date'];
    const missingFields = [];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        missingFields.push(field);
      }
    }
    if (missingFields.length > 0) {
      return res.json({
        status: 400,
        message: 'Fields missing: ' + missingFields.join(', '),
      });
    }

    const { pacientCpf, type, date } = req.body;

    try {
      const result = await CreateAppointmentUsecase.execute({
        pacientCpf,
        date,
        type,
      });

      return res.status(201).json({
        message: 'Appointment created successfully',
        data: result,
      });
    } catch (err: any) {
      switch (err.message) {
        case 'INVALID_DATE_FORMAT':
          return res.status(400).json({
            message: 'Invalid date format',
          });
        case 'APPOINTMENT_EXISTS':
          return res.status(409).json({
            message: 'Appointment already exists.',
          });
        case 'INVALID_DATE_TIME':
          return res.status(400).json({
            message: 'Invalid date time',
          });
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
