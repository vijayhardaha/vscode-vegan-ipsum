# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.3] - 2026-02-18

### Added

- AGENTS.md: authoritative reference for AI agents working on the codebase
- CLAUDE.md: Claude AI configuration/reference document
- PUBLISH_EXTENSION_GUIDE.md: comprehensive guide for publishing VSCode extensions
- .github directory for GitHub configuration
- Husky configuration for Git hooks
- Commitlint configuration for conventional commits

### Changed

- EditorConfig: updated formatting rules (tabs → spaces, indent size 4 → 2)
- Git Ignore: expanded patterns for dependencies, build output, cache directories
- Prettier: simplified configuration using @vijayhardaha/dev-config/prettier
- ESLint: simplified configuration using @vijayhardaha/dev-config/eslint
- VSCode launch.json and settings.json formatting
- Package dependencies (vegan-ipsum, @babel/preset-env, @types/vscode, webpack-cli)
- Node.js version requirement to 24 in .nvmrc
- README.md keybinding example formatting
- src/extension.js formatting (quotes, indentation, structure)
- webpack.config.mjs formatting

### Removed

- Old publishing guide (docs/how-to-publish-vscode-extension.md)

## [1.0.2] - 2026-02-17

### Changed

- Updated project dependencies
- Simplified ESLint configuration
- Renamed lint/fix scripts for clearer workflows
- Cleaned and reformatted package.json
- Updated VSCode settings and vscodeignore exclusions
- Streamlined logic-related code
- Improved in-code documentation

### Removed

- Unused ESLint packages

## [1.0.1] - 2025-05-04

### Added

- Initial maintenance release improvements

## [1.0.0] - 2025-05-04

### Added

- Initial release of extension
