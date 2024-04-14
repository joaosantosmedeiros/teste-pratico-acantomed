import { PrismaPacientRepository as Repository } from '../../db/prisma-pacient.repository';

export class DeletePacientUsecase {
  static async execute(cpf: string): Promise<void> {
    const pacient = await Repository.findByCPF(cpf, true);
    if (!pacient) {
      throw new Error('NOT_FOUND');
    }

    if (pacient.Appointment.length > 0) {
      throw new Error('PACIENT_HAS_APOINTMENTS');
    }

    await Repository.delete(pacient);
  }
}
