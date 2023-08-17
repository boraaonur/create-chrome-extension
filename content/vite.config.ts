import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: path.resolve(__dirname, "src/main.tsx"),
      output: {
        dir: path.resolve(__dirname, "./dist"),
        entryFileNames: "content.js",
      },
    },
  },
});
