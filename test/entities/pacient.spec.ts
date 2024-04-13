import { it, describe, expect } from '@jest/globals';
import { Pacient } from '../../src/domain/entities/pacient';

describe('Pacient entity tests', () => {
  it('should not create a pacient with an invalid cpf', () => {
    expect(() => {
      new Pacient({
        cpf: '77777777777',
        email: 'mail@mail.com',
        name: 'any_name',
        password: '12345',
      });
    }).toThrow(new Error('CPF must be valid.'));
  });

  it('should not create a pacient with an invalid email', () => {
    expect(() => {
      new Pacient({
        cpf: '57926458090',
        email: 'mailmail.com',
        name: 'any_name',
        password: '12345',
      });
    }).toThrow(new Error('Email must be valid.'));
  });

  it('should not create a pacient with an invalid name', () => {
    expect(() => {
      new Pacient({
        cpf: '57926458090',
        email: 'mail@mail.com',
        name: 'name',
        password: '12345',
      });
    }).toThrow(new Error('Name must be greater or equal than 5 characters.'));
  });

  it('should not create a pacient with an invalid id', () => {
    expect(() => {
      new Pacient({
        id: '231i2312',
        cpf: '57926458090',
        email: 'mail@mail.com',
        name: 'any_name',
        password: '12345',
      });
    }).toThrow('Id must be valid.');
  });

  it('should not create a pacient with an invalid password', () => {
    expect(() => {
      new Pacient({
        cpf: '57926458090',
        email: 'mail@mail.com',
        name: 'any_name',
        password: '1234',
      });
    }).toThrow(
      new Error('Password must be greater or equal than 5 characters.'),
    );
  });

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
