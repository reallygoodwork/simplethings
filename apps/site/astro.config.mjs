import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
	server: { port: 1234, host: true },
	output: 'hybrid',
	integrations: [
		tailwind(),
		sanity({
      projectId: 'e9frm8yx',
			dataset: 'production',
      // Set useCdn to false if you're building statically.
			useCdn: false,
			studioBasePath: "/admin",
			apiVersion: "2024-05-25",
    }),
		react(),
	],
	devToolbar: {
    enabled: false
  },
	adapter: vercel({
    edgeMiddleware: true,
  }),
});
