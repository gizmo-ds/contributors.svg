import { defineConfig } from 'nitro';
import { name } from './package.json';

export default defineConfig({
  serverDir: './server',
  cloudflare: {
    wrangler: {
      name: name.replace('.', '-'),
      compatibility_date: '2026-10-23',
      kv_namespaces: [{ binding: 'KV_CACHE' }],
      vars: {
        CACHE_CF_KV_BINDING: 'KV_CACHE',
        MAX_SIZE: 128,
        MAX_ITEMS: 200
      }
    }
  }
});
