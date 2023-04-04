const { withEsbuildOverride } = require("remix-esbuild-override");
const {
  createRoutesFromFolders,
} = require("@remix-run/v1-route-convention");
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
    // option.plugins = [
    //   GlobalsPolyfills({ buffer: true }),
    //   ...option.plugins,
    // ];
  }

  return option;
});

/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ...(process.env.NODE_ENV === "production" ? {
    serverBuildTarget: "cloudflare-pages",
    publicPath: "/build/",
    serverBuildPath: "functions/[[path]].js",
    serverConditions: ["worker"],
    serverMainFields: ["browser", "module", "main"],
    serverModuleFormat: "esm",
    serverPlatform: "node",
    serverDependenciesToBundle: "all",
    serverMinify: true,
    server: "./server.ts",
  } : {}),
  future: {
    unstable_tailwind: true,
    unstable_postcss: true,
    v2_routeConvention: true,
  },
  routes(defineRoutes) {
    // uses the v1 convention, works in v1.15+ and v2
    return createRoutesFromFolders(defineRoutes);
  },
};