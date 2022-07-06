// FILE: /Users/liran/work/mnb-ts/.vitebook/config.js

import __vitebook__path from 'path';
import { fileURLToPath as __vitebook__fileURLToPath } from 'url';
import { createRequire as __vitebook__createRequire } from 'module';
const require = __vitebook__createRequire(import.meta.url);
var __require = function(x) { return require(x); };
__require.__proto__.resolve = require.resolve;
const __filename = __vitebook__fileURLToPath(import.meta.url);
const __dirname = __vitebook__path.dirname(__filename);

// .vitebook/config.js
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { clientPlugin, defineConfig } from "@vitebook/client/node";
import { defaultThemePlugin } from "@vitebook/theme-default/node";
import preprocess from "svelte-preprocess";
var config_default = defineConfig({
  include: ["src/**/*.story.svelte"],
  alias: {
    $app: "/node_modules/@sveltejs/kit/assets/app",
    $lib: "/src/lib"
  },
  plugins: [
    clientPlugin({ appFile: "App.svelte" }),
    defaultThemePlugin(),
    svelte({
      compilerOptions: {
        hydratable: true
      },
      extensions: [".svelte"],
      preprocess: preprocess()
    })
  ],
  site: {
    title: "y",
    description: "",
    theme: {}
  }
});
export {
  config_default as default
};
