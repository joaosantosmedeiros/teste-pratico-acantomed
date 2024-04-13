import { PrismaPacientRepository as Repository } from '../../db/prisma-pacient.repository';
import { Pacient } from '../../entities/pacient';
import { validateCpf } from '../../utils/validate-cpf';
import { validateEmail } from '../../utils/validate-email';
import bcrypt from 'bcrypt';

type UpdatePacientInput = {
  email: string;
  cpf: string;
  newCpf: string;
  name: string;
  password: string;
};

export class UpdatePacientUsecase {
  static async execute(input: UpdatePacientInput): Promise<Pacient> {
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

    const pacientExists = await Repository.findByCPF(input.cpf);
    if (!pacientExists) {
      throw new Error('NOT_FOUND');
    }

    const emailIsInUse = await Repository.findByEmail(input.email);
    if (emailIsInUse && pacientExists.id != emailIsInUse.id) {
      throw new Error('EMAIL_IN_USE');
    }

    const cpfIsValid = validateCpf(input.newCpf);
    if (!cpfIsValid) {
      throw new Error('INVALID_CPF');
    }

    const cpfIsInUse = await Repository.findByCPF(input.newCpf);
    if (cpfIsInUse && pacientExists.id != cpfIsInUse.id) {
      throw new Error('CPF_IN_USE');
    }

    const password = bcrypt.hashSync(input.password, 10);
    const pacient = new Pacient({
      cpf: input.newCpf,
      email: input.email,
      id: pacientExists.id,
      name: input.name,
      password,
    });

    return Repository.update(pacient);
  }
}
