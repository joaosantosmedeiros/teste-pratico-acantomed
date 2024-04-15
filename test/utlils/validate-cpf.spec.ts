import { it, describe, expect } from '@jest/globals';
import { validateCpf } from '../../src/utils/validate-cpf';

describe('Validate Cpf', () => {
  it('should return false if cpf is less than 11', () => {
    expect(validateCpf('1234567891')).toBeFalsy();
  });

  it('should return false if cpf contains non number character', () => {
    expect(validateCpf('123456789a1')).toBeFalsy();
  });

  it('should return false if all numbers are equal', () => {
    expect(validateCpf('11111111111')).toBeFalsy();
  });

  it('should return false if first validation digit does not match', () => {
    expect(validateCpf('44855208045')).toBeFalsy();
  });

  it('should return false if all second validation digit does not match', () => {
    expect(validateCpf('44855208036')).toBeFalsy();
  });

  it('should return true for a valid cpf', () => {
    expect(validateCpf('66985121098')).toBeTruthy();
  });
});
