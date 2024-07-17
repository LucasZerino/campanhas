import { corporativeEmailProviders } from '@/constants';

export function validateEmail(email: string) {
  if (!email) {
    return false;
  }
  const domain = email.split('@')[1];
  return !corporativeEmailProviders.includes(domain);
}

export function validateCNPJ(cnpj: string) {
  cnpj = cnpj.replace(/[^\d]+/g, '');
  return cnpj.length === 14;
}

export function formatPhoneNumber(value: string): string {
  const cleaned = value.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{0,2})(\d{0,5})(\d{0,4})$/);
  if (match) {
    let formatted = '';
    if (match[1]) formatted += `(${match[1]}`;
    if (match[2]) formatted += `) ${match[2]}`;
    if (match[3]) formatted += `-${match[3]}`;
    return formatted.trim();
  }
  return value;
}
