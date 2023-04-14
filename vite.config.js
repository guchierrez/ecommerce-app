import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import copy from "rollup-plugin-copy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        { src: "src/assets", dest: "dist" },
        { src: "products.json", dest: "dist" },
      ],
    }),
  ],
  base: "/ecommerce-app/",
});
