import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/huzaifa-bashir-portfolio/",
  server: {
    port: 5173,
    open: true,
  },
  build: {
    target: "esnext",
    minify: "terser",
    cssCodeSplit: true,
  },
});
