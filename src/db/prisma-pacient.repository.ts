import { Pacient, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class PrismaPacientRepository {
  static async create(pacient: Pacient): Promise<Pacient> {
    return prisma.pacient.create({
      data: {
        id: pacient.id,
        cpf: pacient.cpf,
        email: pacient.email,
        name: pacient.name,
        password: pacient.password,
      },
    });
  }

  static async findByCPF(cpf: string): Promise<Pacient | null> {
    return prisma.pacient.findUnique({
      where: {
        cpf,
      },
    });
  }

  static async findByEmail(email: string): Promise<Pacient | null> {
    return prisma.pacient.findUnique({
      where: {
        email,
      },
    });
  }

  static async list(): Promise<Pacient[]> {
    return prisma.pacient.findMany({});
  }

  async update(pacient: Pacient): Promise<Pacient> {
    throw new Error('Method not implemented.');
  }
  async delete(pacient: Pacient): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
