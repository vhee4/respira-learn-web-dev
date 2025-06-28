export function maskEmail(email: string): string {
  const [localPart, domain] = email.split('@');

  // Mask all but the last 2 characters of the local part
  const visiblePart = localPart.slice(-2);
  const maskedPart = '*'.repeat(localPart.length - 2);

  // Return the masked email
  return `${maskedPart}${visiblePart}@${domain}`;
}
