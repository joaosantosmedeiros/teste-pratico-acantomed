import { Request, Response } from 'express';
import { CreatePacientUseCase } from '../../usecases/pacient/create-pacient.usecase';

export class CreatePacientController {
  static async create(req: Request, res: Response) {
    const requiredFields = ['cpf', 'email', 'password', 'name'];
    const missingFields = [];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        missingFields.push(field);
      }
    }
    if (missingFields.length > 0) {
      return res.json({
        status: 400,
        message: 'Fields missing: ' + missingFields.join(', '),
      });
    }

    const { cpf, email, name, password } = req.body;
    try {
      const pacient = await CreatePacientUseCase.execute({
        cpf,
        name,
        email,
        password,
      });

      return res.json({
        status: 201,
        data: {
          id: pacient.id,
          name: pacient.name,
          email: pacient.email,
          cpf: pacient.cpf,
        },
      });
    } catch (err: any) {
      switch (err.message) {
        case 'NAME_LENGTH':
          return res.json({
            status: 400,
            message: 'Name must be greater or equal to 5 characters.',
          });
        case 'PASSWORD_LENGTH':
          return res.json({
            status: 400,
            message: 'Password must be greater or equal to 5 characters.',
          });
        case 'INVALID_EMAIL':
          return res.json({
            status: 400,
            message: 'Email must be valid.',
          });
        case 'EMAIL_IN_USE':
          return res.json({
            status: 409,
            message: 'Email is already in use',
          });
        case 'INVALID_CPF':
          return res.json({
            status: 400,
            message: 'CPF must be valid',
          });
        case 'CPF_IN_USE':
          return res.json({
            status: 409,
            message: 'CPF is already in use',
          });
        default:
          console.log(err);
          return res.json({
            status: 500,
            message: 'Internal server error',
          });
      }
    }
  }
}
