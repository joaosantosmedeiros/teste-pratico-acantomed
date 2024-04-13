import { randomUUID } from 'crypto';
import { validateUUID } from '../utils/validate-uuid';

type AppointmentProps = {
  id?: string;
  pacientId: string;
  type: string;
  date: Date;
};

export class Appointment {
  id: string;
  pacientId: string;
  type: string;
  date: Date;

  constructor(props: AppointmentProps) {
    const { date, type, pacientId, id } = props;

    if (id) {
      const idIsValid = validateUUID(id);
      if (!idIsValid) {
        throw new Error('Id must be valid.');
      }
      this.id = id;
    } else {
      this.id = randomUUID();
    }

    const pacientIdIsValid = validateUUID(pacientId);
    if (!pacientIdIsValid) {
      throw new Error('Pacient id must be valid.');
    }
    this.pacientId = pacientId;

    if (type.length < 5) {
      throw new Error('Type must be greater or equal than 5 characters.');
    }
    this.type = type;

    if (date < new Date()) {
      throw new Error('Date must be future.');
    }
    this.date = date;
  }
}
