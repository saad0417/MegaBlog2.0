import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react-dom") || id.includes("/react/")) {
              return "react-vendor";
            }
            if (id.includes("react-router")) {
              return "router";
            }
            if (id.includes("@reduxjs") || id.includes("react-redux")) {
              return "redux";
            }
            if (id.includes("appwrite")) {
              return "appwrite";
            }
            if (id.includes("tinymce") || id.includes("@tinymce")) {
              return "editor";
            }
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
});
