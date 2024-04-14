import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@sveltejs/adapter-static";
// was "@sveltejs/adapter-auto"
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.mjs"

const dev = true;

/** @type {import(""@sveltejs/kit").Config} */
const config = {
  extensions: [".svelte", ".md", ".svx"],
  preprocess: [
    vitePreprocess({}),
    mdsvex(mdsvexConfig),
  ],
  kit: {
    adapter: adapter({
      pages: "out",
      assets: "out",
    }),
    paths: {
      // change below to your repo name
      base: dev ? "" : "/lettuce-magician.github.io",
    },
  },
};

export default config;
