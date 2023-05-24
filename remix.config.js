const { withEsbuildOverride } = require("remix-esbuild-override");
const {
  createRoutesFromFolders,
} = require("@remix-run/v1-route-convention");
const { default: GlobalsPolyfills } = require("@esbuild-plugins/node-globals-polyfill");

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
    option.define = {
      global: "globalThis",
    };
  }

  return option;
});

/** @type {import('@remix-run/dev').AppConfig}*/
module.exports = {
  devServerBroadcastDelay: 1000,
  devServerPort: 3000,
  ...(process.env.NODE_ENV === "production" ? {
    serverBuildTarget: "cloudflare-pages",
    serverConditions: ["worker"],
    serverMainFields: ["browser", "module", "main"],
    serverModuleFormat: "esm",
    serverPlatform: "neutral",
    serverMinify: false,
    server: "./server.ts",
  } : {}),
  serverDependenciesToBundle: "all",
  future: {
    unstable_tailwind: true,
    v2_routeConvention: true,
  },
  routes(defineRoutes) {
    return createRoutesFromFolders(defineRoutes);
  },
};
