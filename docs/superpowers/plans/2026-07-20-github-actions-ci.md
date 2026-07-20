# GitHub Actions CI Pipeline Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a GitHub Actions quality gate for pushes and proposed merges involving `main`, `development`, and `production`.

**Architecture:** One workflow runs a single validation job on GitHub-hosted Ubuntu runners. It checks out the repository, configures Node.js with npm download caching, performs a clean lockfile-based install, then runs linting, tests, and the Next.js production build.

**Tech Stack:** GitHub Actions, Node.js 22, npm, Next.js 16

## Global Constraints

- Trigger on pushes to and pull requests targeting `main`, `development`, and `production`, plus merge-queue checks.
- Use `npm ci` for a clean, reproducible install.
- Run the repository's existing lint, test, and build scripts.
- Do not add deployment steps without a configured hosting target and credentials.

---

### Task 1: Add the CI workflow

**Files:**
- Create: `.github/workflows/ci.yml`
- Test: workflow structure assertion plus existing repository commands

**Interfaces:**
- Consumes: `package-lock.json` and the `lint`, `test`, and `build` scripts from `package.json`.
- Produces: a required-ready GitHub Actions job named `Validate`.

- [x] **Step 1: Run a structural assertion and confirm it fails because the workflow is absent.**

```bash
node -e "const fs=require('node:fs'); if(!fs.existsSync('.github/workflows/ci.yml')) process.exit(1)"
```

- [x] **Step 2: Create `.github/workflows/ci.yml` with branch, pull request, permissions, concurrency, Node, cache, install, lint, test, and build configuration.**

- [x] **Step 3: Run the structural assertion and confirm all required commands and triggers are present.**

```bash
node -e "const y=require('node:fs').readFileSync('.github/workflows/ci.yml','utf8'); for (const value of ['push:', 'pull_request:', 'merge_group:', 'main', 'development', 'production', 'npm ci', 'npm run lint', 'npm test', 'npm run build']) if (!y.includes(value)) throw new Error('Missing '+value)"
```

- [x] **Step 4: Run the same commands used by CI.**

```bash
npm ci
npm run lint
npm test
npm run build
```

- [x] **Step 5: Review `git diff` and leave staging and committing to the repository owner.**
