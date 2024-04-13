export const validateCpf = (cpf: string): boolean => {
  if (cpf.length != 11) {
    return false;
  }

  const cpfSplitted: number[] = cpf.split('').map((letter) => parseInt(letter));
  for (const num of cpfSplitted) {
    if (isNaN(num)) {
      return false;
    }
  }

  let equalNumbers = 0;
  for (let i = 0; i < cpfSplitted.length - 1; i++) {
    if (cpfSplitted[i] == cpfSplitted[i + 1]) {
      equalNumbers++;
    }
  }
  if (equalNumbers >= 10) {
    return false;
  }

  const cpfMultiplied: number[] = cpfSplitted.map((num, i, arr) => {
    return num * (10 - i);
  });
  cpfMultiplied.pop();
  cpfMultiplied.pop();

  const sumFirstDigit = cpfMultiplied.reduce((acc, el) => acc + el) * 10;
  let restFirstDigit: number = sumFirstDigit % 11;
  if (restFirstDigit == 10) {
    restFirstDigit = 0;
  }
  if (cpfSplitted[9] != restFirstDigit) {
    return false;
  }

  const cpfMultiplied2: number[] = cpfSplitted.map((num, i, arr) => {
    return num * (11 - i);
  });
  cpfMultiplied2.pop();

  const sumSecondDigit = cpfMultiplied2.reduce((acc, el) => acc + el) * 10;
  let restSecondDigit: number = sumSecondDigit % 11;
  if (restFirstDigit == 10) {
    restSecondDigit = 0;
  }
  if (cpfSplitted[10] != restSecondDigit) {
    return false;
  }

  return true;
};
