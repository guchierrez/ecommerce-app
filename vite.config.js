import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import copy from "fs-extra/copy";

export default defineConfig({
  plugins: [react()],
  base: "/ecommerce-app/",
  build: {
    rollupOptions: {
      input: "index.html",
    },
    outDir: "dist",
    assetsDir: "assets",
    minify: "terser",
    emptyOutDir: true,
    write: true,
    afterBuild: async () => {
      await copy("src/assets", "dist/assets");
      await copy("products.json", "dist/products.json");
    },
  },
});
