import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.devtool = 'hidden-source-map'
    return config
  }
};

export default nextConfig;
