import type { NextConfig } from "next";
import Icons from "unplugin-icons/webpack";

const nextConfig: NextConfig = {
  // /* config options here */
  webpack(config) {
    config.plugins.push(
      Icons({
        // autoInstall: true,
        compiler: "jsx",
        jsx: "react",
      }),
    );
    return config;
  },
};

export default nextConfig;
