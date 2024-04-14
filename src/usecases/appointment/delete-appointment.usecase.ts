import { PrismaAppointmentRepository as Repository } from '../../db/prisma-appointment.repository';

export class DeleteAppointmentUsecase {
  static async execute(id: string) {
    const appointment = await Repository.findById(id);
    if (!appointment) {
      throw new Error('NOT_FOUND');
    }

    await Repository.delete(appointment);
  }
}
