const { withEsbuildOverride } = require("remix-esbuild-override");
// const { default: GlobalsPolyfills } = require("@esbuild-plugins/node-globals-polyfill");

/**
 * Define callbacks for the arguments of withEsbuildOverride.
 * @param option - Default configuration values defined by the remix compiler
 * @param isServer - True for server compilation, false for browser compilation
 * @param isDev - True during development.
 * @return {EsbuildOption} - You must return the updated option
 */
withEsbuildOverride((option, { isServer }) => {
  if (isServer) {
    option.platform = "node";
    // option.define = {
    //   global: "globalThis",
    // };
    option.plugins = [
      // GlobalsPolyfills({ buffer: true }),
      ...option.plugins,
    ];
  }

  return option;
});

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverDependenciesToBundle: "all",
  serverBuildTarget: "cloudflare-pages",
  // ignoredRouteFiles: ['**/.*'],
  server: "./server.ts",
  devServerBroadcastDelay: 1000,
  serverMainFields: ["browser", "module", "main"],
  serverModuleFormat: "esm",
  serverPlatform: "neutral",
  serverConditions: ["worker"],
  serverMinify: true,
  // serverPlatform: "node"
};