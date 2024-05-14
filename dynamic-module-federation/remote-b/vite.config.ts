import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remoteB",
      filename: "remoteEntry.js",
      exposes: {
        "./RemoteBRoot": "./src/App.tsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  preview: {
    port: 9001,
  },
  build: {
    target: 'esnext'
  }
});
