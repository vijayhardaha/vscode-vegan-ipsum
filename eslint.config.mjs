import path from "node:path";
import { fileURLToPath } from "node:url";

import babelParser from "@babel/eslint-parser";
import { fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import importPlugin from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";
import globals from "globals";

// Resolve __dirname and __filename for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure FlatCompat for compatibility with older ESLint configurations
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended, // Use recommended JavaScript rules
  allConfig: js.configs.all, // Use all JavaScript rules
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

  {
    // Extend recommended and Prettier configurations
    ...compat.extends("eslint:recommended", "plugin:prettier/recommended")[0],

    // Define plugins
    plugins: {
      import: fixupPluginRules(importPlugin), // Import plugin for managing import/export rules
      prettier: fixupPluginRules(prettier), // Prettier plugin for code formatting
    },

    // Set language options
    languageOptions: {
      ecmaVersion: "latest", // Use the latest ECMAScript version
      sourceType: "module", // Use ES module syntax
      globals: globals.node, // Include Node.js global variables
      parser: babelParser, // Use Babel parser for advanced syntax
      parserOptions: {
        requireConfigFile: false, // Do not require a Babel config file
        babelOptions: {
          presets: ["@babel/preset-env"], // Use Babel preset for modern JavaScript
        },
      },
    },

    // Define custom rules
    rules: {
      "prettier/prettier": ["warn", {}, { usePrettierrc: true }], // Warn on Prettier formatting issues
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object"], // Group imports
          pathGroups: [
            {
              pattern: "@/**", // Treat imports starting with "@" as internal
              group: "internal",
              position: "after",
            },
          ],
          alphabetize: { order: "asc", caseInsensitive: true }, // Alphabetize imports
          "newlines-between": "always", // Enforce newlines between import groups
          warnOnUnassignedImports: true, // Warn on unassigned imports
        },
      ],
    },
  },
]);
