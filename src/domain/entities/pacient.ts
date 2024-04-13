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

    if (name.length < 5) {
      throw new Error('Name must be greater or equal than 5 characters.');
    }
    this.name = name;

    if (password.length < 5) {
      throw new Error('Password must be greater or equal than 5 characters.');
    }
    this.password = password;

    const emailIsValid = validateEmail(email);
    if (!emailIsValid) {
      throw new Error('Email must be valid.');
    }
    this.email = email;

    const cpfIsValid = validateCpf(cpf);
    if (!cpfIsValid) {
      throw new Error('CPF must be valid.');
    }
    this.cpf = cpf;

    if (!id) {
      this.id = randomUUID();
    } else {
      const idIsValid = validateUUID(id);
      if (!idIsValid) {
        throw new Error('Id must be valid.');
      }
      this.id = id;
    }
  }
}
