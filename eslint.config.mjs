import path from "node:path";
import { fileURLToPath } from "node:url";

import babelParser from "@babel/eslint-parser";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";

// Resolve __dirname and __filename for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure FlatCompat for compatibility with older ESLint configurations
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended, // Use recommended rules from @eslint/js
});

export default defineConfig([
  // Define global ignore patterns
  globalIgnores([
    "**/.git/",
    "**/node_modules/",
    "**/dist/",
    "**/coverage/",
    "**/types/",
    "**/*.log",
    "**/*.tsbuildinfo",
  ]),

  // Specify file extensions to lint
  { files: ["**/*.{js,mjs}"] },

  // Extend recommended and Prettier configurations
  ...compat.extends(
    "plugin:prettier/recommended" // Prettier integration
  ),

  {
    // Set language options
    languageOptions: {
      ecmaVersion: "latest", // Use the latest ECMAScript version
      sourceType: "module", // Use ES module syntax
      globals: {
        ...globals.node, // Include Node.js global variables
      },
      parser: babelParser, // Use Babel parser for advanced syntax
      parserOptions: {
        requireConfigFile: false, // Do not require a Babel config file
        babelOptions: {
          presets: ["@babel/preset-env"], // Use Babel preset for modern JavaScript
        },
      },
    },
  },
]);
