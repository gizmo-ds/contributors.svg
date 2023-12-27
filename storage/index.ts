import { createStorage, Driver } from 'unstorage';
import {
  customMemoryDriver,
  customCloudflareKVBindingDriver,
  denoKVDriver
} from './drivers';

export const storage = createStorage({ driver: get_storage_device() });

function get_storage_device(): Driver {
  const env = process.env;

  // CloudFlare KV (binding)
  if (isSet(env.CACHE_CF_KV_BINDING))
    return customCloudflareKVBindingDriver({
      binding: env.CACHE_CF_KV_BINDING
    });

  // Deno KV
  if (
    isDeno() &&
    env.CACHE_DENO_KV_ENABLE &&
    env.CACHE_DENO_KV_ENABLE === 'true'
  )
    return denoKVDriver();

  // Memory
  return customMemoryDriver();
}
