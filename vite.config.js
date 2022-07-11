import { sveltekit } from "@sveltejs/kit/vite";

console.log(import.meta.env);
/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
};

export default config;
