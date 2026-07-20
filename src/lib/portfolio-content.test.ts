import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  languages,
  portfolioStats,
  softSkills,
} from "./portfolio-content.ts";

test("hero statistics prioritize verified professional outcomes", () => {
  assert.deepEqual(portfolioStats, [
    { value: "1+", label: "Years Backend Experience" },
    { value: "45%", label: "Server Traffic Reduced" },
    { value: "30%", label: "Infrastructure Cost Reduced" },
    { value: "Automated", label: "Developer Deployments" },
  ]);
});

test("DES Digital experience stays concise while preserving key outcomes", () => {
  const pageSource = readFileSync(
    new URL("../app/page.tsx", import.meta.url),
    "utf8",
  );

  assert.match(
    pageSource,
    /Improved deployment stability and performance across PHP\/Laravel services and AWS infrastructure, automated developer deployments, and refactored code for readability and maintainability\./,
  );
  assert.match(
    pageSource,
    /PHP, Laravel, Node\.js, TypeScript, MySQL, AWS Lambda/,
  );
});

test("technical skills include deployment automation", () => {
  const pageSource = readFileSync(
    new URL("../app/page.tsx", import.meta.url),
    "utf8",
  );

  assert.match(pageSource, /"Deployment Automation"/);
});

test("ServerOne experience emphasizes API work and maintainability", () => {
  const pageSource = readFileSync(
    new URL("../app/page.tsx", import.meta.url),
    "utf8",
  );

  assert.match(
    pageSource,
    /Implemented and enhanced Laravel REST APIs for NovaCloud Hosting/,
  );
  assert.match(pageSource, /investigated and resolved assigned issues/);
  assert.match(
    pageSource,
    /applied SOLID principles to improve code maintainability/,
  );
});

test("Fusionex experience emphasizes frontend, API, and bug-fix work", () => {
  const pageSource = readFileSync(
    new URL("../app/page.tsx", import.meta.url),
    "utf8",
  );

  assert.match(
    pageSource,
    /Developed and enhanced frontend features for a custom transportation web application/,
  );
  assert.match(pageSource, /contributed to API development and integration/);
  assert.match(pageSource, /resolved bugs across the Vue\.js and Node\.js stack/);
});

test("working style content provides structured cues", () => {
  assert.equal(softSkills.length, 4);
  assert.ok(softSkills.every((skill) => skill.name && skill.cue));
  assert.ok(languages.every((language) => language.name && language.level));
});
