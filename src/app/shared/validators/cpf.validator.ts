import { AbstractControl, ValidationErrors } from '@angular/forms';

export function cpfValidator(control: AbstractControl): ValidationErrors | null {
  if (!control.value) {
    return null;
  }

  const cpf = control.value.replace(/\D/g, '');

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return { cpfInvalido: true };
  }

  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }

  let resto = soma % 11;
  let digitoVerificador1 = resto < 2 ? 0 : 11 - resto;

  if (digitoVerificador1 !== parseInt(cpf.charAt(9))) {
    return { cpfInvalido: true };
  }

  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }

  resto = soma % 11;
  let digitoVerificador2 = resto < 2 ? 0 : 11 - resto;

  if (digitoVerificador2 !== parseInt(cpf.charAt(10))) {
    return { cpfInvalido: true };
  }

  return null;
}
