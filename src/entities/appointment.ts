import { randomUUID } from 'crypto';
import { validateUUID } from '../utils/validate-uuid';

type AppointmentProps = {
  id?: string;
  pacientCpf: string;
  type: string;
  date: Date;
};

export class Appointment {
  id: string;
  pacientCpf: string;
  type: string;
  date: Date;

  constructor(props: AppointmentProps) {
    const { date, type, pacientCpf, id } = props;

    if (id) {
      this.id = id;
    } else {
      this.id = randomUUID();
    }

    this.pacientCpf = pacientCpf;
    this.type = type;
    this.date = date;
  }
}
