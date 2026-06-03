import crypto from "node:crypto";

// Polyfill crypto.hash for Node.js versions < 21.7.0 (Vite 7 requires it)
if (typeof crypto.hash !== "function") {
  (crypto as any).hash = function (algorithm: string, data: any, format: any = "hex") {
    const hash = crypto.createHash(algorithm).update(data);
    return format ? hash.digest(format) : hash.digest();
  };
}

import { defineConfig } from "@lovable.dev/vite-tanstack-config/dist/index.js";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const isVercel = process.env.VERCEL === "1" || process.env.VERCEL === "true";
const isExplicitStaticDeploy = process.env.STATIC_DEPLOY === "true";
const isStaticDeploy = isGitHubPages || isVercel || isExplicitStaticDeploy;
const githubPagesBase = "/cascaca-arabic-launch/";

export default defineConfig({
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
    base: isGitHubPages ? githubPagesBase : "/",
  },
});
