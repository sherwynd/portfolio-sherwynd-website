# Portfolio and CV Enhancement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve Sherwynd's portfolio positioning for Backend Developer and AWS DevOps roles, add accessible contact actions and an accurate dynamic age, and create a separate revised CV without changing the original PDF.

**Architecture:** Keep the existing single-page Next.js App Router structure and its current visual direction. Use a tested pure TypeScript age utility, native HTML popover behavior for contact choices, focused content updates in the existing page, and a reproducible ReportLab script for the revised ATS-oriented CV.

**Tech Stack:** Next.js 16.2.10, React 19.2.4, TypeScript, CSS, Node test runner, ReportLab, pypdf, Poppler.

## Global Constraints

- Preserve `public/sherwynd-liew-cv.pdf` unchanged.
- Use 2 February 2002 as the age source of truth.
- Display location as Kuala Lumpur / Petaling Jaya, Malaysia.
- Position the candidate as a Backend Developer (PHP/Laravel) with hands-on AWS DevOps responsibilities.
- Defer the project showcase until screenshots and live demo links are available.
- Do not claim an AWS certification that has not been earned.

---

### Task 1: Accurate Age and About Positioning

**Files:**
- Create: `src/lib/calculate-age.ts`
- Create: `src/lib/calculate-age.test.ts`
- Modify: `package.json`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Produces: `calculateAge(birthDate: Date, today?: Date): number`
- Consumes: `Home` uses the helper with `new Date(2002, 1, 2)`.

- [ ] **Step 1: Write the failing age tests**

```ts
import assert from "node:assert/strict";
import test from "node:test";
import { calculateAge } from "./calculate-age.ts";

test("calculates age after the birthday", () => {
  assert.equal(calculateAge(new Date(2002, 1, 2), new Date(2026, 6, 18)), 24);
});

test("does not add a year before the birthday", () => {
  assert.equal(calculateAge(new Date(2002, 1, 2), new Date(2026, 0, 18)), 23);
});
```

- [ ] **Step 2: Run the test and verify the missing-module failure**

Run: `node --no-warnings --experimental-strip-types --test src/lib/calculate-age.test.ts`

Expected: FAIL because `src/lib/calculate-age.ts` does not exist.

- [ ] **Step 3: Implement the age helper**

```ts
export function calculateAge(birthDate: Date, today = new Date()): number {
  let age = today.getFullYear() - birthDate.getFullYear();
  const birthdayHasPassed =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate());

  if (!birthdayHasPassed) age -= 1;
  return age;
}
```

- [ ] **Step 4: Update About content and verify the tests pass**

Run: `npm test`

Expected: 2 passing tests and 0 failures.

### Task 2: Contact Popover and Hero Actions

**Files:**
- Modify: `src/app/layout.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/app/globals.css`
- Modify: `package.json`
- Modify: `package-lock.json`

**Interfaces:**
- Produces: global `#contact-options` popover with email, WhatsApp, and call links.
- Consumes: header and hero buttons target `contact-options`; CV buttons download `/sherwynd-liew-cv-revised.pdf`; View More links to `#about`.

- [ ] **Step 1: Add `lucide-react` for familiar action icons**

Run: `npm install lucide-react`

Expected: dependency and lockfile update without install errors.

- [ ] **Step 2: Add the native contact popover to the root layout**

```tsx
<div id="contact-options" className="contact-popover" popover="auto">
  <a href="mailto:sherwyndliewliyuan@gmail.com">Send Email</a>
  <a href="https://wa.me/60169508763" target="_blank" rel="noreferrer">WhatsApp</a>
  <a href="tel:+60169508763">Call</a>
</div>
```

- [ ] **Step 3: Wire Contact Me, Download CV, and View More actions**

Use `popovertarget="contact-options"` semantics through React's supported `popoverTarget` prop, keep Download CV as a direct file download, and link View More to `#about`.

- [ ] **Step 4: Style responsive popover, button, focus, backdrop, and mobile states**

Ensure keyboard focus is visible, action labels do not overflow, and the popover remains usable on narrow screens.

### Task 3: Skills, Projects, and Revised CV

**Files:**
- Modify: `src/app/page.tsx`
- Modify: `src/app/layout.tsx`
- Modify: `src/app/globals.css`
- Create: `scripts/generate-revised-cv.py`
- Create: `output/pdf/sherwynd-liew-cv-revised.pdf`
- Create: `public/sherwynd-liew-cv-revised.pdf`

**Interfaces:**
- Produces: technical groups ordered Backend, AWS & DevOps, Infrastructure & Observability, Tools & Workflow; one concise Soft Skills group; separate revised CV artifact and public download copy.
- Consumes: existing verified employment, education, contact, and project details from `public/sherwynd-liew-cv.pdf` plus the user's AWS responsibilities.

- [ ] **Step 1: Reorder and focus skills for Backend and DevOps hiring**

Use Laravel, PHP, AWS, Docker, ECS, EC2, CloudWatch, CloudFormation, GitHub, and Jira as the primary technical signal. Keep soft skills after all technical groups.

- [ ] **Step 2: Defer project cards and remove project navigation/stat claims**

Do not present projects until screenshots and live demo access are available; retain GitHub profile links in contact areas.

- [ ] **Step 3: Generate a separate two-page ATS-oriented CV**

The generator must include a concise summary, achievement-led experience bullets, grouped technical skills before soft skills, education, selected projects from the existing CV, and no unearned certification claim.

- [ ] **Step 4: Render and inspect the revised PDF**

Run: `pdftoppm -png output/pdf/sherwynd-liew-cv-revised.pdf tmp/pdfs/revised-cv`

Expected: two legible pages with no clipping, overlap, broken glyphs, or awkward section breaks.

- [ ] **Step 5: Run complete verification**

Run: `npm test && npm run lint && npm run build`

Expected: all commands exit 0 with no test failures, lint errors, or build errors.

