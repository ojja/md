/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  serverDependenciesToBundle: "all",
  serverBuildTarget: "cloudflare-pages",
  // ignoredRouteFiles: ['*/.'],
  server: "./server.ts",
  devServerBroadcastDelay: 1000,
  serverMainFields: ["browser", "module", "main"],
  serverModuleFormat: "esm",
  serverPlatform: "neutral",
  serverConditions: ["worker"],
  serverMinify: true,
  future: {
    unstable_postcss: true,
  }
};
