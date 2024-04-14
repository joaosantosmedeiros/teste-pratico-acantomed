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

  static async findByCPF(cpf: string, includeAppointments?: boolean) {
    return prisma.pacient.findUnique({
      where: {
        cpf,
      },
      include: {
        Appointment: includeAppointments,
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

  static async update(pacient: Pacient): Promise<Pacient> {
    return prisma.pacient.update({
      where: {
        id: pacient.id,
      },
      data: {
        cpf: pacient.cpf,
        email: pacient.email,
        name: pacient.name,
        password: pacient.password,
      },
    });
  }

  static async delete(pacient: Pacient): Promise<void> {
    await prisma.pacient.delete({
      where: {
        id: pacient.id,
      },
    });
  }
}
