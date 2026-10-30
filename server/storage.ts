import { createStorage, type Driver } from 'unstorage';
import { isSet } from './utils';

import memoryDriver from 'unstorage/drivers/memory';
import vercelRuntimeCacheDriver from 'unstorage/drivers/vercel-runtime-cache';
import cloudflareKVBindingDriver from 'unstorage/drivers/cloudflare-kv-binding';
import netlifyBlobsDriver from 'unstorage/drivers/netlify-blobs';

let driver: Driver = memoryDriver();
const env = process.env;

// CloudFlare KV (binding)
if (env.CACHE_CF_KV_BINDING && isSet(env.CACHE_CF_KV_BINDING.trim()))
  driver = cloudflareKVBindingDriver({
    binding: env.CACHE_CF_KV_BINDING.trim()
  });
// Vercel Runtime Cache
if (env.VERCEL_RUNTIME_CACHE_ENABLE === 'true')
  driver = vercelRuntimeCacheDriver({});
// Netlify Blobs
if (env.NETLIFY_BLOBS_NAME && env.NETLIFY_BLOBS_NAME.trim() !== '')
  driver = netlifyBlobsDriver({ name: env.NETLIFY_BLOBS_NAME.trim() });

console.debug('Storage:', driver.name);

export const storage = createStorage({ driver });
