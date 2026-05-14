import type { NextConfig } from "next";

const repoName = "/NOME_DO_REPO";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoName,
  images: { unoptimized: true },
};

export default nextConfig;