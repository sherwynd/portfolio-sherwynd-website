import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
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

test("layout initializes and renders the theme control", () => {
  const layoutSource = readFileSync(
    new URL("../app/layout.tsx", import.meta.url),
    "utf8",
  );

  assert.match(layoutSource, /import Script from "next\/script"/);
  assert.match(
    layoutSource,
    /import { ThemeToggle } from "\.\.\/components\/theme-toggle"/,
  );
  assert.match(layoutSource, /suppressHydrationWarning/);
  assert.match(
    layoutSource,
    /<Script[\s\S]*id="theme-init"[\s\S]*strategy="beforeInteractive"/,
  );
  assert.match(layoutSource, /<ThemeToggle \/>/);
});

test("CSS defines softer dark and complete light palettes", () => {
  const cssSource = readFileSync(
    new URL("../app/globals.css", import.meta.url),
    "utf8",
  );

  assert.match(cssSource, /:root {[\s\S]*color-scheme: dark/);
  assert.match(cssSource, /--background: #0b0f0d/);
  assert.match(
    cssSource,
    /\[data-theme="light"\] {[\s\S]*color-scheme: light/,
  );
  assert.match(cssSource, /\[data-theme="light"\] {[\s\S]*--background: #f7faf8/);
  assert.match(cssSource, /\[data-theme="light"\] {[\s\S]*--panel: #ffffff/);
  assert.match(cssSource, /\.theme-toggle {/);
});
