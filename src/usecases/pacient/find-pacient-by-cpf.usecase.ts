import { PrismaPacientRepository as Repository } from '../../db/prisma-pacient.repository';

export class FindPacientByCpfUsecase {
  static async execute(cpf: string) {
    const pacient = await Repository.findByCPF(cpf);
    if (!pacient) {
      throw new Error('NOT_FOUND');
    }
    return pacient;
  }
}
