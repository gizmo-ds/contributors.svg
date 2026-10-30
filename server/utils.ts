export function isSet(...s: string[]): boolean {
  if (!s) return false;
  return s.reduce((a, b) => (!a ? false : b.length > 0), true);
}

export function isVercel() {
  return process.env.VERCEL === '1';
}

export function intParam(
  query: URLSearchParams,
  name: string,
  fallback: number,
  min: number,
  envMax?: string
): number {
  let max: number | undefined;

  if (envMax !== undefined && envMax.trim() !== '') {
    max = Number(envMax);

    if (!Number.isSafeInteger(max)) {
      throw new Error(`Invalid MAX_${name.toUpperCase()} environment variable`);
    }
  }

  const raw = query.get(name)?.trim();
  const parsed = raw && /^[+-]?\d+$/.test(raw) ? Number(raw) : fallback;
  const value = Number.isSafeInteger(parsed) ? parsed : fallback;

  if (!Number.isSafeInteger(fallback) || !Number.isSafeInteger(min)) {
    throw new Error(`Invalid integer range configuration for ${name}`);
  }

  if (max !== undefined && max < min) {
    throw new Error(`Maximum value is smaller than minimum value for ${name}`);
  }

  return Math.max(min, Math.min(value, max ?? Number.MAX_SAFE_INTEGER));
}
