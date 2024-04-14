import { PrismaAppointmentRepository as AppointmentRepository } from '../../db/prisma-appointment.repository';
import { PrismaPacientRepository as PacientRepository } from '../../db/prisma-pacient.repository';
import { Appointment } from '../../entities/appointment';

export class FindAppointmentByPacientUsecase {
  static async execute(cpf: string): Promise<Appointment[]> {
    const pacientExists = await PacientRepository.findByCPF(cpf);
    if (!pacientExists) {
      throw new Error('PACIENT_NOT_FOUND');
    }

    return AppointmentRepository.findByPacient(cpf);
  }
}
