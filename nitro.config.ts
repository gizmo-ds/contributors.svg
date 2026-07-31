import { fileURLToPath, URL } from 'node:url';

export default defineNitroConfig({
  alias: { '@': fileURLToPath(new URL('./', import.meta.url)) },
  compatibilityDate: '2026-07-31'
});
