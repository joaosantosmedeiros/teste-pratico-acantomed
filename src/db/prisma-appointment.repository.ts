import { Appointment, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class PrismaAppointmentRepository {
  static async create(appointment: Appointment): Promise<Appointment> {
    return prisma.appointment.create({
      data: {
        id: appointment.id,
        date: appointment.date,
        type: appointment.type,
        pacientCpf: appointment.pacientCpf,
      },
    });
  }

  static async findById(id: string): Promise<Appointment | null> {
    return prisma.appointment.findUnique({
      where: {
        id,
      },
    });
  }

  static async findByDate(date: Date): Promise<Appointment | null> {
    return prisma.appointment.findUnique({
      where: {
        date,
      },
    });
  }

  static async list(): Promise<Appointment[]> {
    return prisma.appointment.findMany();
  }

  static async update(appointment: Appointment): Promise<Appointment> {
    return prisma.appointment.update({
      where: {
        id: appointment.id,
      },
      data: {
        date: appointment.date,
        pacientCpf: appointment.pacientCpf,
        type: appointment.type,
      },
    });
  }

  static async delete(appointment: Appointment): Promise<void> {
    await prisma.appointment.delete({
      where: {
        id: appointment.id,
      },
    });
  }
}
