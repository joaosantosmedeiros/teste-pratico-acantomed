import { it, describe, expect } from '@jest/globals';
import { Pacient } from '../../src/entities/pacient';

describe('Pacient entity tests', () => {
  it('should generate a random id if no id is passed', () => {
    const pacient = new Pacient({
      cpf: '57926458090',
      email: 'mail@mail.com',
      name: 'any_name',
      password: '12345',
    });

    expect(pacient.id).not.toBeNull();
  });

  it('should create a pacient correctly', () => {
    const pacient = new Pacient({
      id: '23fcae60-5c08-4637-b30d-100c5651f85d',
      cpf: '57926458090',
      email: 'mail@mail.com',
      name: 'any_name',
      password: '12345',
    });

    expect(pacient.id).toBe('23fcae60-5c08-4637-b30d-100c5651f85d');
    expect(pacient).not.toBeNull();
  });
});
