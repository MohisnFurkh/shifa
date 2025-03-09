import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Enables static export
  images: {
    unoptimized: true, // Needed for static export
  },
  basePath: "/Shifa-AI", // Replace 'shifa' with your GitHub repo name
  assetPrefix: "/Shifa-AI", // Ensures assets load correctly
};

export default nextConfig;
