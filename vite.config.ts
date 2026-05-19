import crypto from "node:crypto";

// Polyfill crypto.hash for Node.js versions < 21.7.0 (Vite 7 requires it)
if (typeof crypto.hash !== "function") {
  (crypto as any).hash = function (algorithm: string, data: any, format: any = "hex") {
    const hash = crypto.createHash(algorithm).update(data);
    return format ? hash.digest(format) : hash.digest();
  };
}

import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      autoCodeSplitting: false,
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
    }),
    viteReact(),
  ],
  server: {
    host: "::",
    port: 8080,
  },
});
