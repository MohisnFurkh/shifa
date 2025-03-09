import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Shifa-AI",  // Ensure this matches your repo name
  assetPrefix: "/Shifa-AI",
};

export default nextConfig;
