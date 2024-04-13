import { describe, it, expect } from '@jest/globals';
import { Appointment } from '../../src/domain/entities/appointment';

describe('Appointment entity tests', () => {
  it('should throw if an invalid pacientId is passed', () => {
    expect(() => {
      new Appointment({
        date: new Date(),
        pacientId: '23fcae60-508-4637-b30d-100c5651f85d',
        type: 'any_type',
      });
    }).toThrow('Pacient id must be valid.');
  });

  it('should throw if an invalid id is passed', () => {
    expect(() => {
      new Appointment({
        id: '23fcae60-5c08-4637-b30d-100c5651f85',
        date: new Date(),
        pacientId: '23fcae60-5c08-4637-b30d-100c5651f85d',
        type: 'any_type',
      });
    }).toThrow('Id must be valid.');
  });

  it('should throw if an invalid type is passed', () => {
    expect(() => {
      new Appointment({
        id: '23fcae60-5c08-4637-b30d-100c5651f85d',
        date: new Date(),
        pacientId: '23fcae60-5c08-4637-b30d-100c5651f85d',
        type: 'type',
      });
    }).toThrow('Type must be greater or equal than 5 characters.');
  });

  it('should throw if an invalid date is passed', () => {
    expect(() => {
      new Appointment({
        id: '23fcae60-5c08-4637-b30d-100c5651f85d',
        date: new Date(new Date().getDate() - 1),
        pacientId: '23fcae60-5c08-4637-b30d-100c5651f85d',
        type: 'any_type',
      });
    }).toThrow('Date must be future.');
  });

  it('should generate an id if no id is passed', () => {
    const appointment = new Appointment({
      date: new Date(),
      pacientId: '23fcae60-5c08-4637-b30d-100c5651f85d',
      type: 'any_type',
    });

    expect(appointment.id).not.toBeNull();
  });

  it('should create a appointment correctly', () => {
    const appointment = new Appointment({
      id: '23fcae60-5c08-4637-b30d-100c5651f85d',
      date: new Date(),
      pacientId: '23fcae60-5c08-4637-b30d-100c5651f85d',
      type: 'any_type',
    });

    expect(appointment.id).toBe('23fcae60-5c08-4637-b30d-100c5651f85d');
    expect(appointment).toBeTruthy();
  });
});
