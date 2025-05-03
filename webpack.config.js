const path = require("path");

/** @typedef {import('webpack').Configuration} WebpackConfig **/
/** @type WebpackConfig */
const webExtensionConfig = {
  mode: "none", // Keeps the source code close to the original; use 'production' for optimized builds.
  target: "webworker", // Specifies that the extension runs in a webworker context.
  entry: {
    extension: "./extension.js", // Entry point for the web extension's main file.
  },
  output: {
    filename: "[name].js", // Output filename pattern.
    path: path.join(__dirname, "./dist/web"), // Output directory for the bundled files.
    libraryTarget: "commonjs", // Specifies the module format for the output.
    devtoolModuleFilenameTemplate: "../../[resource-path]", // Maps source files for debugging.
  },
  resolve: {
    mainFields: ["browser", "module", "main"], // Prioritizes the `browser` field in package.json for module resolution.
    extensions: [".js"], // Resolves JavaScript files.
    alias: {
      // Define alternate implementations for modules or source files here.
    },
    fallback: {
      // Polyfills for Node.js core modules in Webpack 5.
      // For more details, see: https://webpack.js.org/configuration/resolve/#resolvefallback
      assert: path.resolve(__dirname, "node_modules/assert"), // Polyfill for the 'assert' module.
    },
  },
  externals: {
    vscode: "commonjs vscode", // Excludes the 'vscode' module from the bundle as it is provided by VS Code.
  },
  performance: {
    hints: false, // Disables performance hints for bundle size.
  },
  devtool: "nosources-source-map", // Generates a source map without exposing the original source code.
};

module.exports = [webExtensionConfig];
