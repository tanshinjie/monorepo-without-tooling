import withBundleAnalyzer from "@next/bundle-analyzer";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["shared"],
  experimental: {
    optimizePackageImports: ["shared"],
  },
  // only needed for page router
  // webpack: (config) => {
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     "react": path.resolve(__dirname, "./node_modules/react"),
  //   };
  //   return config;
  // },
};

export default withBundleAnalyzer({
  enabled: false,
})(nextConfig);
