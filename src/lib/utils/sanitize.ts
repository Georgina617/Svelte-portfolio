export const sanitizeInput = (value: string) =>
  value.replace(/[<>{}[\]\\]/g, '').replace(/\s+/g, ' ').trim().slice(0, 500);
