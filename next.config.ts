import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.GITHUB_ACTIONS === "true" ? "/adam-website" : "",
  typescript: {
    // The GitHub Pages export does not execute the Cloudflare Worker modules.
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
