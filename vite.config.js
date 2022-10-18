import { defineConfig } from "vite";

import path from "path";

export default defineConfig({
  css: {
    module: {
     
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    },
    extensions: [".js", ".css"]
  },
  server: {
    open: true,
  },
  envPrefix: "Yyf"
})