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
      this.id = id;
    } else {
      this.id = randomUUID();
    }

    this.pacientId = pacientId;
    this.type = type;
    this.date = date;
  }
}
