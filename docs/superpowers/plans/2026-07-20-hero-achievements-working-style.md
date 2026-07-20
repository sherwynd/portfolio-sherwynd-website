# Hero Achievements and Working Style Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the hero portrait substantially larger, replace weak résumé facts with verified outcome-led achievements, and redesign soft skills to match the structured language rows.

**Architecture:** Keep the existing Next.js App Router page and global design system. Move the revised portfolio facts into a small typed content module so the copy can be tested independently, then update the existing page markup and responsive CSS without introducing new runtime dependencies.

**Tech Stack:** Next.js 16.2.10, React 19.2.4, TypeScript, Node test runner, global CSS.

## Global Constraints

- Preserve all unrelated user changes in the dirty worktree.
- Use only claims already supported by the current portfolio CV.
- Keep the current dark background, mint accent, and responsive single-page structure.
- Preserve descriptive image alternative text and reduced-motion behavior.

---

### Task 1: Outcome-led Portfolio Content

**Files:**
- Create: `src/lib/portfolio-content.test.ts`
- Create: `src/lib/portfolio-content.ts`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Produces: `portfolioStats`, `softSkills`, and `languages` typed content arrays.
- Consumes: `Home` maps each array into the hero statistics and working-style rows.

- [ ] **Step 1: Write the failing content test**

```ts
import assert from "node:assert/strict";
import test from "node:test";
import { languages, portfolioStats, softSkills } from "./portfolio-content.ts";

test("hero statistics prioritize verified professional outcomes", () => {
  assert.deepEqual(portfolioStats, [
    { value: "1+", label: "Years Backend Experience" },
    { value: "45%", label: "Server Traffic Reduced" },
    { value: "30%", label: "Infrastructure Cost Reduced" },
    { value: "Multi-region", label: "Cloud Platform Delivery" },
  ]);
});

test("working style content provides structured cues", () => {
  assert.equal(softSkills.length, 4);
  assert.ok(softSkills.every((skill) => skill.name && skill.cue));
  assert.ok(languages.every((language) => language.name && language.level));
});
```

- [ ] **Step 2: Run the focused test and verify RED**

Run: `node --no-warnings --experimental-strip-types --test src/lib/portfolio-content.test.ts`

Expected: FAIL with `ERR_MODULE_NOT_FOUND` for `portfolio-content.ts`.

- [ ] **Step 3: Add the typed content module**

```ts
export const portfolioStats = [
  { value: "1+", label: "Years Backend Experience" },
  { value: "45%", label: "Server Traffic Reduced" },
  { value: "30%", label: "Infrastructure Cost Reduced" },
  { value: "Multi-region", label: "Cloud Platform Delivery" },
] as const;

export const softSkills = [
  { name: "Analytical problem-solving", cue: "Systems thinking" },
  { name: "Technical communication", cue: "Clear & concise" },
  { name: "Ownership", cue: "End-to-end" },
  { name: "Adaptability", cue: "Fast learner" },
] as const;

export const languages = [
  { name: "English", level: "Native" },
  { name: "Chinese", level: "Native" },
  { name: "Malay", level: "Advanced" },
] as const;
```

- [ ] **Step 4: Replace page-local arrays and render structured working-style rows**

Import the three arrays, map `portfolioStats` in the hero, and render both soft skills and languages with the shared `working-row` structure. Label the section with a concise intro and use semantic `article`, `h3`, `strong`, and `span` elements.

- [ ] **Step 5: Run the focused test and verify GREEN**

Run: `node --no-warnings --experimental-strip-types --test src/lib/portfolio-content.test.ts`

Expected: 2 passing tests and 0 failures.

### Task 2: Larger Portrait and Working Style Visual Redesign

**Files:**
- Modify: `src/app/globals.css`

**Interfaces:**
- Consumes: `.hero-visual`, `.profile-orbit`, `.profile-card`, `.working-style-section`, `.working-style-grid`, `.working-card`, and `.working-row` markup from `Home`.
- Produces: desktop and mobile layouts with a larger portrait and consistent row-based cards.

- [ ] **Step 1: Enlarge the portrait composition**

Give the visual column more space, expand the portrait card from 72% to the full available width, raise its maximum size, and retain a controlled crop with `object-fit: cover` and responsive size caps.

- [ ] **Step 2: Replace the uneven split layout**

Use a full-width working-style header followed by two equal cards. Style both cards with a consistent header, count, rows, status pills, hover/focus-safe contrast, and one-column mobile behavior.

- [ ] **Step 3: Verify responsive CSS behavior**

At desktop widths, keep text and portrait side-by-side and cards in two columns. At 980px and 640px breakpoints, center the portrait without shrinking it back to the prior small size and stack cards/rows without overflow.

### Task 3: Verification and Visual QA

**Files:**
- Verify: `src/app/page.tsx`
- Verify: `src/app/globals.css`
- Verify: `src/lib/portfolio-content.ts`
- Verify: `src/lib/portfolio-content.test.ts`

**Interfaces:**
- Consumes: the completed page and content module.
- Produces: evidence that tests, lint, build, desktop layout, and mobile layout succeed.

- [ ] **Step 1: Run automated verification**

Run: `npm test && npm run lint && npm run build`

Expected: all commands exit 0 with no test failures, lint errors, or build errors.

- [ ] **Step 2: Inspect the page at desktop and mobile widths**

Run the local development server, inspect the hero and working-style section at approximately 1440px and 390px widths, and confirm there is no clipping, overlap, horizontal scrolling, unreadable pill text, or oversized blank space.

- [ ] **Step 3: Review the final diff**

Confirm the diff is limited to the new content/test module, the page markup, the relevant CSS, and this plan; preserve all pre-existing unrelated changes.
