import bcrypt from 'bcrypt';
import { PrismaPacientRepository as Repository } from '../../db/prisma-pacient.repository';
import { validateEmail } from '../../utils/validate-email';
import { validateCpf } from '../../utils/validate-cpf';
import { Pacient } from '../../entities/pacient';

type CreatePacientInput = {
  email: string;
  cpf: string;
  name: string;
  password: string;
};

export class CreatePacientUseCase {
  static async execute(input: CreatePacientInput) {
    if (input.name.length < 5) {
      throw new Error('NAME_LENGTH');
    }
    if (input.password.length < 5) {
      throw new Error('PASSWORD_LENGTH');
    }

    const emailIsValid = validateEmail(input.email);
    if (!emailIsValid) {
      throw new Error('INVALID_EMAIL');
    }

    const emailIsInUse = await Repository.findByEmail(input.email);
    if (emailIsInUse) {
      throw new Error('EMAIL_IN_USE');
    }

    const cpfIsInUse = await Repository.findByCPF(input.cpf);
    if (cpfIsInUse) {
      throw new Error('CPF_IN_USE');
    }

    const cpfIsValid = validateCpf(input.cpf);
    if (!cpfIsValid) {
      throw new Error('INVALID_CPF');
    }

    const password = bcrypt.hashSync(input.password, 10);
    const pacient = new Pacient({
      cpf: input.cpf,
      email: input.email,
      name: input.name,
      password,
    });
    return Repository.create(pacient);
  }
}
