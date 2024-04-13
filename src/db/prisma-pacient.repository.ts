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

  static async findByCPF(cpf: string): Promise<Pacient> {
    const pacient = await prisma.pacient.findUnique({
      where: {
        cpf,
      },
    });
    if (!pacient) {
      throw new Error('Pacient not found.');
    }
    return pacient;
  }

  static async findByEmail(email: string): Promise<Pacient> {
    const pacient = await prisma.pacient.findUnique({
      where: {
        email,
      },
    });
    if (!pacient) {
      throw new Error('Pacient not found.');
    }
    return pacient;
  }

  async list(): Promise<Pacient[]> {
    throw new Error('Method not implemented.');
  }
  async update(pacient: Pacient): Promise<Pacient> {
    throw new Error('Method not implemented.');
  }
  async delete(pacient: Pacient): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
