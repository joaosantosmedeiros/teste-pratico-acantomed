import { PrismaAppointmentRepository as Repository } from '../../db/prisma-appointment.repository';
import { Appointment } from '../../entities/appointment';

export class ListAppointmentsUsecase {
  static async execute(): Promise<Appointment[]> {
    return Repository.list();
  }
}
