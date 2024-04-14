import { PrismaAppointmentRepository as Repository } from '../../db/prisma-appointment.repository';
import { Appointment } from '../../entities/appointment';

export class FindAppointmentByIdUsecase {
  static async execute(id: string): Promise<Appointment> {
    const appointment = await Repository.findById(id);
    if (!appointment) {
      throw new Error('NOT_FOUND');
    }

    return appointment;
  }
}
