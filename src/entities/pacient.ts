import { randomUUID } from 'crypto';
import { validateEmail } from '../utils/validate-email';
import { validateCpf } from '../utils/validate-cpf';
import { validateUUID } from '../utils/validate-uuid';

type PacientProps = {
  id?: string;
  name: string;
  email: string;
  cpf: string;
  password: string;
};

export class Pacient {
  id: string;
  name: string;
  email: string;
  cpf: string;
  password: string;

  constructor(props: PacientProps) {
    const { id, name, email, cpf, password } = props;

    this.name = name;
    this.password = password;
    this.email = email;
    this.cpf = cpf;

    if (!id) {
      this.id = randomUUID();
    } else {
      this.id = id;
    }
  }
}
