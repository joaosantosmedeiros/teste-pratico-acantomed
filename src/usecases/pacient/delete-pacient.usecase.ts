import { PrismaPacientRepository as Repository } from '../../db/prisma-pacient.repository';

export class DeletePacientUsecase {
  static async execute(cpf: string): Promise<void> {
    const pacient = await Repository.findByCPF(cpf);
    if (!pacient) {
      throw new Error('NOT_FOUND');
    }

    await Repository.delete(pacient);
  }
}
