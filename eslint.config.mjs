/**
 * ==========================================
 * ESLINT CONFIGURATION FILE
 * ==========================================
 * PURPOSE:
 *   Provides linting rules and configurations for JavaScript and Node.js.
 *   Ensures code quality, consistency, and adherence to best practices.
 * DOCS:
 *   https://eslint.org/docs/latest/use/configure/configuration-files-new
 * ==========================================
 */

import globals from "globals";
import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import babelParser from "@babel/eslint-parser";
import pluginPrettier from "eslint-plugin-prettier";

export default defineConfig([
	// --- Global Ignore Patterns ---
	{
		// Excludes specific directories and files from linting.
		ignores: [
			"**/.git/",
			"**/node_modules/",
			"**/dist/",
			"**/coverage/",
			"**/types/",
			"**/*.log",
			"**/*.tsbuildinfo",
		],
	},

	// ==========================================
	// BASE RULES
	// ==========================================
	// Includes recommended ESLint rules for JavaScript.
	js.configs.recommended,

	// ==========================================
	// PROJECT-SPECIFIC CONFIGURATION
	// ==========================================
	{
		// --- Target Files ---
		// Specifies the file extensions to lint.
		files: ["**/*.{js,mjs}"],

		// --- Plugins ---
		// Registers plugins required for linting.
		plugins: { prettier: pluginPrettier },

		// --- Language Options ---
		// Configures the language environment for linting.
		languageOptions: {
			ecmaVersion: "latest", // Use the latest ECMAScript version.
			sourceType: "module", // Use ES module syntax.
			globals: {
				...globals.node, // Include Node.js global variables.
			},
			parser: babelParser, // Use Babel parser for advanced syntax.
			parserOptions: {
				requireConfigFile: false, // Do not require a Babel config file.
				babelOptions: {
					// Additional Babel options can be specified here.
				},
			},
		},

		// Apply Prettier rules
		rules: {
			"prettier/prettier": "error", // Enforce Prettier formatting as an error.
		},
	},
]);
