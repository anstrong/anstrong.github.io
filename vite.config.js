import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), react()]
  /*build: {
    outDir: "build"
  },
  server: {
    strictPort: true,
    hmr: {
      port: 443 // Run the websocket server on the SSL port
    }
  }*/
});
