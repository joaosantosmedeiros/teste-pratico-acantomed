import { describe, it, expect } from '@jest/globals';
import { Appointment } from '../../src/entities/appointment';

describe('Appointment entity tests', () => {
  it('should generate an id if no id is passed', () => {
    const appointment = new Appointment({
      date: new Date(),
      pacientCpf: '11111111111',
      type: 'any_type',
    });

    expect(appointment.id).not.toBeNull();
  });

  it('should create a appointment correctly', () => {
    const appointment = new Appointment({
      id: '23fcae60-5c08-4637-b30d-100c5651f85d',
      date: new Date(),
      pacientCpf: '11111111111',
      type: 'any_type',
    });

    expect(appointment.id).toBe('23fcae60-5c08-4637-b30d-100c5651f85d');
    expect(appointment).toBeTruthy();
  });
});
