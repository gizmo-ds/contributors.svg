deno-deploy:
	NITRO_PRESET=deno-deploy pnpm run build
	CACHE_DENO_KV_ENABLE=true deno run -A --unstable .output/server/index.ts
