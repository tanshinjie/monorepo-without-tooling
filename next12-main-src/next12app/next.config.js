import withTM from "next-transpile-modules";
import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // // alternative to next-transpile-modules
  // avg ~12s
  // webpack: (config, options) => {
  //   config.module.rules.push({
  //     test: /\.+(js|jsx|mjs|ts|tsx)$/,
  //     exclude: /node_modules/,
  //     use: options.defaultLoaders.babel,
  //   });
  //   return config;
  // },
};

let _nextConfig = withTM(["shared"], {
  debug: false,
})(nextConfig);

export default withBundleAnalyzer({
  enabled: false,
})(_nextConfig);