# AGENTS.md

> **This file serves as the authoritative reference for AI agents working on the `vscode-vegan-ipsum` codebase.**

## Project Overview

VSCode extension that generates vegan-themed placeholder text (ipsum) for design and development workflows.

## Tech Stack

TypeScript · VSCode Extension API · Node.js

### Tech Stack

- **Lang**: TypeScript
- **Framework**: VSCode Extension API
- **Runtime**: Node.js
- **Package Manager**: npm

## Project Structure

```
src/extension.ts          # Extension entry point
package.json              # Extension manifest and dependencies
tsconfig.json            # TypeScript configuration
.vscode/                 # VSCode workspace settings
```

## Commands

```bash
npm install           # Install dependencies
npm run compile       # Compile TypeScript
npm run package       # Package extension for distribution
```

## Code Standards

### Naming Conventions

- Functions/variables: `camelCase`
- Files: `kebab-case`
- Constants: `SCREAMING_SNAKE_CASE`

### TypeScript Rules

- Use `interface` for object shapes, `type` for unions
- Avoid `any` (use `unknown` instead)
- Avoid non-null assertion `!` (use `?.` or explicit checks)

### Required Pre-commit Checks

1. Run `npm run compile` — Type check
2. Remove unused imports
3. Prefix intentionally unused variables with `_`

## Testing

- Use VSCode's built-in extension testing tools
- Test in the Extension Development Host

## Documentation

- Add JSDoc comments for exported functions and complex types

## Git Workflow

**Before preparing git.md (after each task):**

1. Run `npm run compile` — Type check
2. Check for unused imports

**After completing a task:**

1. Check unstaged changes: `git status --porcelain` && `git diff`
2. Stage files: `git add <files>`
3. Create `.tmp/git.md` containing the staged files and commit command
4. Create separate commits for each logical change
5. Do NOT run git commands directly — only write to `.tmp/git.md`
6. Wait for user to verify and commit
7. Do NOT restore `.tmp/git.md` after it's cleared — clearing is intentional

Example `.tmp/git.md`:

```bash
git add src/extension.ts package.json
git commit -m "feat: add vegan ipsum generation

- implement placeholder text generation
- add configuration for text length"
```

## Commit Conventions

**Format:** `<type>(<scope>): <summary>`

**Types:** `feat`, `fix`, `docs`, `test`, `refactor`, `style`, `build`, `chore`

**Rules:** Subject line ≤72 chars, lowercase. Body: normal case, max 100 chars per line. Blank line after subject.
