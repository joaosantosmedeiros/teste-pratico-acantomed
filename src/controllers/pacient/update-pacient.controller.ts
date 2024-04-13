import { Request, Response } from 'express';
import { UpdatePacientUsecase } from '../../usecases/pacient/update-pacient.usecase';

export class UpdatePacientController {
  static async update(req: Request, res: Response) {
    const requiredFields = ['newCpf', 'email', 'password', 'name'];
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

    try {
      const cpf = req.params.cpf;
      const { email, newCpf, name, password } = req.body;
      const pacient = await UpdatePacientUsecase.execute({
        cpf,
        newCpf,
        email,
        name,
        password,
      });

      return res.json({
        message: 'Pacient updated successfully',
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
          return res.status(400).json({
            message: 'Name must be greater or equal to 5 characters.',
          });
        case 'PASSWORD_LENGTH':
          return res.status(400).json({
            message: 'Password must be greater or equal to 5 characters.',
          });
        case 'INVALID_EMAIL':
          return res.status(400).json({
            message: 'Email must be valid.',
          });
        case 'EMAIL_IN_USE':
          return res.status(409).json({
            message: 'Email is already in use',
          });
        case 'INVALID_CPF':
          return res.status(400).json({
            message: 'CPF must be valid',
          });
        case 'CPF_IN_USE':
          return res.status(409).json({
            message: 'CPF is already in use',
          });
        case 'NOT_FOUND':
          return res.status(404).json({
            message: 'Pacient not found.',
          });
        default:
          console.log(err);
          return res.status(500).json({
            message: 'Internal server error',
          });
      }
    }
  }
}
