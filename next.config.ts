import type { NextConfig } from "next";

const repo = "/julia_souza";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repo,
  assetPrefix: `${repo}/`,
  images: { unoptimized: true },
};

export default nextConfig;