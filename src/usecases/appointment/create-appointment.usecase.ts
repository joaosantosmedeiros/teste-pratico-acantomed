import { PrismaAppointmentRepository as AppointmentRepository } from '../../db/prisma-appointment.repository';
import { PrismaPacientRepository as PacientRepository } from '../../db/prisma-pacient.repository';

import { Appointment } from '../../entities/appointment';

type CreateAppointmentInput = {
  pacientCpf: string;
  type: string;
  date: Date;
};

export class CreateAppointmentUsecase {
  static async execute(input: CreateAppointmentInput): Promise<Appointment> {
    const dateIsValid = new Date(input.date).getTime() > 0;
    if (!dateIsValid) {
      throw new Error('INVALID_DATE_FORMAT');
    }

    const date = new Date(input.date);

    const appointmentExists = await AppointmentRepository.findByDate(date);
    if (appointmentExists) {
      throw new Error('APPOINTMENT_EXISTS');
    }

    if (date < new Date()) {
      throw new Error('INVALID_DATE_TIME');
    }

    const pacientExists = await PacientRepository.findByCPF(input.pacientCpf);
    if (!pacientExists) {
      throw new Error('NOT_FOUND');
    }

    const appointment = new Appointment({
      date,
      pacientCpf: input.pacientCpf,
      type: input.type,
    });
    return AppointmentRepository.create(appointment);
  }
}
