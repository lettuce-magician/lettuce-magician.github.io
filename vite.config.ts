import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	base: "/lettuce-magician.github.io/",
	plugins: [sveltekit()]
});
