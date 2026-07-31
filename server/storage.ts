import { createStorage, type Driver } from 'unstorage';

import memoryDriver from 'unstorage/drivers/memory';
import denoKvDriver from 'unstorage/drivers/deno-kv';
import vercelRuntimeCacheDriver from 'unstorage/drivers/vercel-runtime-cache';
import cloudflareKVBindingDriver from 'unstorage/drivers/cloudflare-kv-binding';
import { isDeno, isSet } from './utils';

let driver: Driver = memoryDriver();
const env = process.env;

// CloudFlare KV (binding)
if (env.CACHE_CF_KV_BINDING && isSet(env.CACHE_CF_KV_BINDING.trim()))
  driver = cloudflareKVBindingDriver({
    binding: env.CACHE_CF_KV_BINDING.trim()
  });
// Deno KV
if (env.CACHE_DENO_KV_PATH && env.CACHE_DENO_KV_PATH.trim() !== '' && isDeno())
  driver = denoKvDriver({ path: env.CACHE_DENO_KV_PATH.trim() });
// Vercel Runtime Cache
if (env.VERCEL_RUNTIME_CACHE_ENABLE === 'true')
  driver = vercelRuntimeCacheDriver({});

console.debug('Storage:', driver.name);

export const storage = createStorage({ driver });
