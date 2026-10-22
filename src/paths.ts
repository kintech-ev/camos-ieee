const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const withBase = (path: string): string => `${base}${path}`;
