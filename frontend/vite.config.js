import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": "https://luxehaven.onrender.com/",
      "/uploads/": "https://luxehaven.onrender.com/",
    },
  },
});
