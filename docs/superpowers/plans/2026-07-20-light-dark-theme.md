# Light and Dark Theme Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Add an accessible, persistent light/dark theme toggle and soften the existing dark theme background.

**Architecture:** Keep the root layout as a Server Component and add a small ThemeToggle Client Component for browser state and localStorage. A before-interactive initialization script applies the saved or system theme before hydration, while semantic CSS variables provide complete light and dark palettes without duplicating component styles.

**Tech Stack:** Next.js 16.2.10 App Router, React 19.2.4, TypeScript, Node test runner, global CSS, lucide-react.

## Global Constraints

- Preserve all unrelated user changes in the dirty worktree.
- Default to the saved theme, then the operating-system preference, then dark mode.
- Persist explicit theme choices under portfolio-theme.
- Keep the existing mint visual identity and accessible focus behavior.
- Use a near-white light background and a softer charcoal-green dark background.

---

### Task 1: Theme Resolution Logic

**Files:**
- Create: src/lib/theme.test.ts
- Create: src/lib/theme.ts

**Interfaces:**
- Produces: Theme, THEME_STORAGE_KEY, getNextTheme(theme), and resolveTheme(storedTheme, prefersDark).
- Consumes: ThemeToggle and the root initialization script use the same theme names and storage key.

- [ ] **Step 1: Write failing theme logic tests**

~~~ts
import assert from "node:assert/strict";
import test from "node:test";
import { getNextTheme, resolveTheme } from "./theme.ts";

test("uses a stored theme before the system preference", () => {
  assert.equal(resolveTheme("light", true), "light");
  assert.equal(resolveTheme("dark", false), "dark");
});

test("falls back to the system preference", () => {
  assert.equal(resolveTheme(null, true), "dark");
  assert.equal(resolveTheme(null, false), "light");
});

test("toggles between light and dark", () => {
  assert.equal(getNextTheme("dark"), "light");
  assert.equal(getNextTheme("light"), "dark");
});
~~~

- [ ] **Step 2: Run the focused test and verify RED**

Run: node --no-warnings --experimental-strip-types --test src/lib/theme.test.ts

Expected: FAIL because src/lib/theme.ts does not exist.

- [ ] **Step 3: Implement the pure theme helpers**

~~~ts
export type Theme = "light" | "dark";
export const THEME_STORAGE_KEY = "portfolio-theme";

export function resolveTheme(storedTheme: string | null, prefersDark: boolean): Theme {
  if (storedTheme === "light" || storedTheme === "dark") return storedTheme;
  return prefersDark ? "dark" : "light";
}

export function getNextTheme(theme: Theme): Theme {
  return theme === "dark" ? "light" : "dark";
}
~~~

- [ ] **Step 4: Run the focused test and verify GREEN**

Run: node --no-warnings --experimental-strip-types --test src/lib/theme.test.ts

Expected: 3 passing tests and 0 failures.

### Task 2: Persistent Accessible Theme Control

**Files:**
- Create: src/components/theme-toggle.tsx
- Modify: src/app/layout.tsx
- Modify: src/lib/theme.test.ts

**Interfaces:**
- Consumes: Theme, THEME_STORAGE_KEY, and getNextTheme from src/lib/theme.ts.
- Produces: an accessible header button and a before-hydration data-theme initializer.

- [ ] **Step 1: Add failing layout contract assertions**

Read src/app/layout.tsx in the test and assert it imports/renders ThemeToggle, includes a beforeInteractive theme-init script, and enables suppressHydrationWarning on html.

- [ ] **Step 2: Run the layout contract test and verify RED**

Run: node --no-warnings --experimental-strip-types --test --test-name-pattern="layout initializes" src/lib/theme.test.ts

Expected: FAIL because the layout has no theme initializer or toggle.

- [ ] **Step 3: Implement the client toggle**

Create a use-client component that reads document.documentElement.dataset.theme, switches between Sun and Moon, updates data-theme and colorScheme, persists the selection, and exposes action-oriented aria-label and title text.

- [ ] **Step 4: Initialize the theme before hydration**

Import Script and ThemeToggle into the root layout, add the theme-init script using strategy="beforeInteractive", add suppressHydrationWarning, and render the toggle before the existing CV and Contact actions.

- [ ] **Step 5: Run the focused tests and verify GREEN**

Run: node --no-warnings --experimental-strip-types --test src/lib/theme.test.ts

Expected: all theme tests pass.

### Task 3: Semantic Light and Dark Color System

**Files:**
- Modify: src/app/globals.css
- Modify: src/lib/theme.test.ts

**Interfaces:**
- Consumes: html[data-theme="light"] and html[data-theme="dark"] from the theme initializer/toggle.
- Produces: semantic background, panel, surface, text, line, shadow, and accent tokens used by all existing sections.

- [ ] **Step 1: Add failing CSS theme contract assertions**

Read globals.css and assert it defines root with color-scheme: dark, a lighter dark background #0b0f0d, and a light data-theme palette with color-scheme: light, background #f7faf8, and panel #ffffff.

- [ ] **Step 2: Run the CSS contract test and verify RED**

Run: node --no-warnings --experimental-strip-types --test --test-name-pattern="CSS defines" src/lib/theme.test.ts

Expected: FAIL because the light palette does not exist.

- [ ] **Step 3: Add palette tokens and replace hard-coded surfaces**

Define semantic tokens for the header, sections, elevated rows, chips, popover, outline text, shadows, and backdrop. Replace corresponding hard-coded dark colors with the tokens so existing components inherit the active palette.

- [ ] **Step 4: Add theme-control styling and reduced-motion behavior**

Style .theme-toggle as a circular header action, preserve focus visibility, hide it until hydration through .theme-toggle-pending, and disable theme transitions under prefers-reduced-motion.

- [ ] **Step 5: Run the theme tests and verify GREEN**

Run: node --no-warnings --experimental-strip-types --test src/lib/theme.test.ts

Expected: all theme tests pass.

### Task 4: Full Verification

**Files:**
- Verify: src/app/layout.tsx
- Verify: src/components/theme-toggle.tsx
- Verify: src/app/globals.css
- Verify: src/lib/theme.ts
- Verify: src/lib/theme.test.ts

**Interfaces:**
- Consumes: the completed theme feature.
- Produces: evidence that tests, lint, TypeScript, production build, and diff checks succeed.

- [ ] **Step 1: Run the complete project gate**

Run: npm test && npm run lint && npm run build && git diff --check -- src/app/layout.tsx src/components/theme-toggle.tsx src/app/globals.css src/lib/theme.ts src/lib/theme.test.ts

Expected: all commands exit 0 with no test failures, lint errors, build errors, or whitespace errors.

- [ ] **Step 2: Review responsive header behavior**

Confirm the toggle remains visible beside the CV/Contact actions on desktop and beside the compact download/contact controls at 640px and below without horizontal overflow.
