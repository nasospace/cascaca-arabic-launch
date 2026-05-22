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
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [tailwindcss(), tsConfigPaths({ projects: ["./tsconfig.json"] })],
  tanstackStart: {
    importProtection: {
      behavior: "error",
      client: {
        files: ["**/server/**"],
        specifiers: ["server-only"],
      },
    },
  },
  vite: {
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
    server: {
      host: "::",
      port: 8080,
    },
  },
});
