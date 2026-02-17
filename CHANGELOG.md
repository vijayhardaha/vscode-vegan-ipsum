# Changelog

All notable changes to this project are listed below. Each release includes a short summary to help understand the important user- or contributor-facing changes.

## v1.0.1 — 2026-02-17

**Summary:**

- Maintenance release: dependency updates, lint/config cleanup, small refactor for clarity, and added editor settings.

**Highlights:**

- Dependencies: updated project dependencies and removed unused ESLint packages to simplify installs and maintenance.
- Linting & configuration: simplified the ESLint configuration (moved to recommended flatcompact rules and removed custom/unneeded plugins and rules) and renamed lint/fix scripts for clearer developer workflows.
- Packaging & metadata: cleaned and reformatted `package.json` for consistency and performed a clean install.
- Editor integration: added a VS Code settings file and expanded the list of files excluded from packaging (vscodeignore) so editor-specific files aren't published.
- Refactor: streamlined the logic-related code and improved in-code documentation/comments for maintainability.

**Notes:**

- These changes are internal/maintenance focused and should not affect the public API or end-user behavior.

## v1.0.0 — 2025-05-04

- Initial release of extension.
