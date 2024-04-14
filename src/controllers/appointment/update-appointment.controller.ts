import { Request, Response } from 'express';
import { UpdateAppointmentUsecase } from '../../usecases/appointment/update-appointment.usecase';

export class UpdateAppointmentController {
  static async update(req: Request, res: Response) {
    const id = req.params.id;
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
      const appointment = await UpdateAppointmentUsecase.execute({
        date,
        id,
        pacientCpf,
        type,
      });

      return res.json({
        message: 'Appointment updated successfully',
        data: appointment,
      });
    } catch (err: any) {
      switch (err.message) {
        case 'APPOINTMENT_NOT_FOUND':
          return res.status(404).json({
            message: 'Appointment not found',
          });
        case 'PACIENT_NOT_FOUND':
          return res.status(404).json({
            message: 'Pacient not found',
          });
        case 'INVALID_DATE_FORMAT':
          return res.status(400).json({
            message: 'Invalid date format',
          });
        case 'INVALID_DATE_TIME':
          return res.status(400).json({
            message: 'Invalid date time',
          });
        case 'APPOINTMENT_EXISTS':
          return res.status(409).json({
            message: 'Appointment time is in use.',
          });
        default:
          return res.status(500).json({
            messag: 'Internal server error',
          });
      }
    }
  }
}
