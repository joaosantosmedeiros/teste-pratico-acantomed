import { PrismaAppointmentRepository as AppointmentRepository } from '../../db/prisma-appointment.repository';
import { PrismaPacientRepository as PacientRepository } from '../../db/prisma-pacient.repository';
import { Appointment } from '../../entities/appointment';

type UpdateAppointmentInput = {
  id: string;
  pacientCpf: string;
  type: string;
  date: Date;
};

export class UpdateAppointmentUsecase {
  static async execute(input: UpdateAppointmentInput): Promise<Appointment> {
    const appointmentExists = await AppointmentRepository.findById(input.id);
    if (!appointmentExists) {
      throw new Error('APPOINTMENT_NOT_FOUND');
    }

    const pacientExists = await PacientRepository.findByCPF(input.pacientCpf);
    if (!pacientExists) {
      throw new Error('PACIENT_NOT_FOUND');
    }

    const dateIsValid = new Date(input.date).getTime() > 0;
    if (!dateIsValid) {
      throw new Error('INVALID_DATE_FORMAT');
    }

    const date = new Date(input.date);

    if (date < new Date()) {
      throw new Error('INVALID_DATE_TIME');
    }

    const appointmentInUse = await AppointmentRepository.findByDate(input.date);
    if (appointmentInUse && appointmentInUse.id != input.id) {
      throw new Error('APPOINTMENT_EXISTS');
    }

    return AppointmentRepository.update(input);
  }
}
