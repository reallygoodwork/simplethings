import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sanity from "@sanity/astro";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
	server: { port: 1234, host: true },
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
});
