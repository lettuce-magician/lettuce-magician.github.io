import highlighter from "./src/lib/utilities/codeHighliter.mjs";

/** @type{import("./node_modules/mdsvex").MdsvexOptions} */
const config = {
  extensions: [".svelte", ".md", ".svx"],
  layout: {
    about: "./src/lib/templates/layout.svelte",
  },
  highlight : {
    highlighter
  }
};

export default config;
