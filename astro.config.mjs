import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: "https://sohamd22.github.io/",
  base: "/devlabs-website",
  output: "server",
  adapter: vercel()
});