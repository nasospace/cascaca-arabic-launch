import crypto from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig as defineViteConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Polyfill crypto.hash for Node.js versions < 21.7.0 (Vite 7 requires it)
type CryptoWithHash = typeof crypto & {
  hash?: (
    algorithm: string,
    data: crypto.BinaryLike,
    outputEncoding?: crypto.BinaryToTextEncoding,
  ) => string | Buffer;
};

const cryptoWithHash = crypto as CryptoWithHash;

if (typeof cryptoWithHash.hash !== "function") {
  cryptoWithHash.hash = function (
    algorithm: string,
    data: crypto.BinaryLike,
    format: crypto.BinaryToTextEncoding = "hex",
  ) {
    const hash = crypto.createHash(algorithm).update(data);
    return format ? hash.digest(format) : hash.digest();
  };
}

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
process.env.WRANGLER_LOG_PATH ??= path.join(projectRoot, ".wrangler", "logs");

import { defineConfig as defineLovableConfig } from "@lovable.dev/vite-tanstack-config/dist/index.js";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const isVercel = process.env.VERCEL === "1" || process.env.VERCEL === "true";
const isExplicitStaticDeploy = process.env.STATIC_DEPLOY === "true";
const isStaticDeploy = isGitHubPages || isVercel || isExplicitStaticDeploy;
const githubPagesBase = "/cascaca-arabic-launch/";

const viteBase = isGitHubPages ? githubPagesBase : "/";

const staticDeployConfig = defineViteConfig({
  plugins: [tailwindcss(), tsConfigPaths({ projects: ["./tsconfig.json"] }), react()],
  base: viteBase,
  build: {
    outDir: "dist/client",
    emptyOutDir: true,
  },
});

const appConfig = defineLovableConfig({
  // For static hosts (GitHub Pages and Vercel static output) we produce a
  // prerendered build, so the Cloudflare worker plugin must be disabled.
  // worker plugin must be disabled. For the Lovable deploy (default) it stays
  // enabled so the SSR worker bundle includes runtime deps like `h3-v2`.
  cloudflare: isStaticDeploy ? false : undefined,
  tanstackStart: {
    router: {
      basepath: isGitHubPages ? githubPagesBase : undefined,
    },
    prerender: {
      // Prerendering spins up a local preview server during `vite build`.
      // Keep that static export step only for static hosts; Lovable production
      // deploys the SSR worker directly.
      enabled: isStaticDeploy,
      crawlLinks: isStaticDeploy,
      failOnError: isStaticDeploy,
    },
  },
  vite: {
    base: viteBase,
  },
});

export default isStaticDeploy ? staticDeployConfig : appConfig;
