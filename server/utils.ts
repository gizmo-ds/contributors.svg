export function isSet(...s: string[]): boolean {
  if (!s) return false;
  return s.reduce((a, b) => (!a ? false : b.length > 0), true);
}

export function isVercel() {
  return process.env.VERCEL === '1';
}
