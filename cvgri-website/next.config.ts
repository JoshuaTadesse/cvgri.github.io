import type { NextConfig } from "next";

const repoName = "cvgri.github.io";

const nextConfig: NextConfig = {
  output: "export",
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    unoptimized: true, // REQUIRED for GitHub Pages
  },

  trailingSlash: true, // prevents 404s on refresh
};

export default nextConfig;
