import { PrismaPacientRepository as Repository } from '../../db/prisma-pacient.repository';
import { Pacient } from '../../entities/pacient';

export class ListPacientsUsecase {
  static async execute(): Promise<Pacient[]> {
    return Repository.list();
  }
}
