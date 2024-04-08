
/**
 * import adapter from '@sveltejs/adapter-auto';
const config = {
  kit: {
    adapter: adapter()
  },
  
};
export default config;
*/

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from "@sveltejs/adapter-static"; 
// was "@sveltejs/adapter-auto"

const dev = true;

/** @type {import(""@sveltejs/kit").Config} */
const config = {
    kit: {
        adapter: adapter({
            pages: "out",
            assets: "out"
        }),
        paths: {
            // change below to your repo name
            base: dev ? "" : "/lettuce-magician.github.io",
        }
    },
    preprocess: vitePreprocess()
};

export default config;