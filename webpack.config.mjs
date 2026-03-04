/**
 * ==========================================
 * WEBPACK CONFIGURATION FILE
 * ==========================================
 * PURPOSE:
 *   Configures Webpack for building the project, including entry points,
 *   output settings, and module resolution.
 * DOCS:
 *   https://webpack.js.org/configuration/
 * ==========================================
 */

import path from "node:path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

/** @typedef {import('webpack').Configuration} WebpackConfig */
const config = {
	// ==========================================
	// MODE
	// ==========================================
	// Specifies the build mode (none, development, or production).
	mode: "none", // Keeps the source code close to the original; use 'production' for optimized builds.

	// ==========================================
	// TARGET
	// ==========================================
	// Specifies the runtime environment for the build.
	target: "webworker", // Specifies that the extension runs in a webworker context.

	// ==========================================
	// ENTRY POINT
	// ==========================================
	// Defines the entry point for the application.
	entry: {
		extension: "./src/extension.js", // Entry point for the web extension's main file.
	},

	// ==========================================
	// OUTPUT
	// ==========================================
	// Configures the output settings for the build.
	output: {
		filename: "[name].js", // Output filename pattern.
		path: path.join(__dirname, "./dist/web"), // Output directory for the bundled files.
		libraryTarget: "commonjs", // Specifies the module format for the output.
		devtoolModuleFilenameTemplate: "../../[resource-path]", // Maps source files for debugging.
	},

	// ==========================================
	// MODULE RESOLUTION
	// ==========================================
	// Configures how modules are resolved.
	resolve: {
		mainFields: ["browser", "module", "main"], // Prioritizes the `browser` field in package.json for module resolution.
		extensions: [".js"], // Resolves JavaScript files.
		fallback: {
			// Polyfills for Node.js core modules in Webpack 5.
			// For more details, see: https://webpack.js.org/configuration/resolve/#resolvefallback
			assert: path.resolve(__dirname, "node_modules/assert"), // Polyfill for the 'assert' module.
		},
	},

	// ==========================================
	// EXTERNALS
	// ==========================================
	// Specifies modules that should not be bundled.
	externals: {
		vscode: "commonjs vscode", // Excludes the 'vscode' module from the bundle as it is provided by VS Code.
	},

	// ==========================================
	// PERFORMANCE
	// ==========================================
	// Configures performance hints for the build.
	performance: {
		hints: false, // Disables performance hints for bundle size.
	},

	// ==========================================
	// SOURCE MAPS
	// ==========================================
	// Configures source map generation for debugging.
	devtool: "nosources-source-map", // Generates a source map without exposing the original source code.
};

export default config;
