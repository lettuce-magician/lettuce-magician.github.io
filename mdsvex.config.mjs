import highlighter from "./src/lib/utilities/codeHighliter.mjs";
import gfm from "remark-gfm";
import codeBlocKPlugin from 'mdsvex-remark-code-extras'

/** @type{import("./node_modules/mdsvex").MdsvexOptions} */
const config = {
  extensions: [".svelte", ".md", ".svx"],
  layout: {
    about: "./src/lib/templates/layout.svelte",
  },
  remarkPlugins: [
    [gfm],
    [
      codeBlocKPlugin,
      {
        components: {
          Tabs: "$lib/Tabs.svelte",
          Tab: "$lib/Tab.svelte",
        },
      },
    ],
  ],
  highlight: {
    highlighter,
  },
};

export default config;
