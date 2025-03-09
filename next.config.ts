import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/shifa",  // Ensure this matches your repo name
  assetPrefix: "/shifa",
};

export default nextConfig;
