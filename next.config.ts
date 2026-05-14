import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/julia_souza",
  assetPrefix: "/julia_souza/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;