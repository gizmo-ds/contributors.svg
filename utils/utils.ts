export function isSet(...s: string[]): boolean {
  if (!s) return false;
  return s.reduce((a, b) => (!a ? false : b && b.length > 0), true);
}

export function isDeno() {
  //@ts-ignore
  return typeof Deno !== 'undefined';
}
