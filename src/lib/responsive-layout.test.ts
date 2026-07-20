import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";

const cssSource = readFileSync(
  new URL("../app/globals.css", import.meta.url),
  "utf8",
);

function getMediaRules(maxWidth: number, nextMaxWidth?: number) {
  const startMarker = `@media (max-width: ${maxWidth}px)`;
  const start = cssSource.indexOf(startMarker);
  const end = nextMaxWidth
    ? cssSource.indexOf(`@media (max-width: ${nextMaxWidth}px)`, start)
    : cssSource.length;

  assert.notEqual(start, -1, `Missing ${startMarker}`);
  assert.notEqual(end, -1, `Missing end of ${startMarker}`);

  return cssSource.slice(start, end);
}

test("tablet header uses the compact single-row navigation", () => {
  const tabletRules = getMediaRules(980, 640);

  assert.match(
    tabletRules,
    /grid-template-columns: minmax\(0, 1fr\) max-content/,
  );
  assert.match(
    tabletRules,
    /\.desktop-nav\s*{[\s\S]*display: none/,
  );
  assert.match(tabletRules, /justify-self: end/);
  assert.match(tabletRules, /flex-wrap: nowrap/);
  assert.match(
    tabletRules,
    /\.header-download,[\s\S]*\.site-header \.contact-trigger\s*{[\s\S]*width: 44px;[\s\S]*padding: 0/,
  );
  assert.match(
    tabletRules,
    /\.header-download-label,[\s\S]*\.header-contact-label\s*{[\s\S]*display: none/,
  );
});

test("crowded desktop widths replace inline navigation with a burger menu", () => {
  const layoutSource = readFileSync(
    new URL("../app/layout.tsx", import.meta.url),
    "utf8",
  );
  const navigationMenuUrl = new URL(
    "../components/navigation-menu.tsx",
    import.meta.url,
  );
  const crowdedDesktopRules = getMediaRules(1120, 980);

  assert.ok(existsSync(navigationMenuUrl), "Missing navigation menu component");
  const navigationMenuSource = readFileSync(navigationMenuUrl, "utf8");

  assert.match(
    layoutSource,
    /import { NavigationMenu } from "\.\.\/components\/navigation-menu"/,
  );
  assert.match(layoutSource, /<nav className="desktop-nav"/);
  assert.match(layoutSource, /<NavigationMenu items={navItems} \/>/);
  assert.match(navigationMenuSource, /<Menu aria-hidden="true" \/>/);
  assert.match(navigationMenuSource, /popover="auto"/);
  assert.match(navigationMenuSource, /hidePopover\(\)/);
  assert.match(
    crowdedDesktopRules,
    /\.desktop-nav\s*{[\s\S]*display: none/,
  );
  assert.match(
    crowdedDesktopRules,
    /\.menu-toggle\s*{[\s\S]*display: inline-grid/,
  );
});

test("narrow mobile header keeps contact available as an icon", () => {
  const layoutSource = readFileSync(
    new URL("../app/layout.tsx", import.meta.url),
    "utf8",
  );

  assert.match(
    layoutSource,
    /className="header-cta header-secondary contact-trigger"[\s\S]*<MessageCircle aria-hidden="true" \/>[\s\S]*className="header-contact-label"/,
  );
  assert.doesNotMatch(
    cssSource,
    /@media \(max-width: 520px\)[\s\S]*\.site-header \.contact-trigger[\s\S]*display: none/,
  );
});
