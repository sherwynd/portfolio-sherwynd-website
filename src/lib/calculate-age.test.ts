import assert from "node:assert/strict";
import test from "node:test";

import { calculateAge } from "./calculate-age.ts";

test("calculates age after the birthday", () => {
  assert.equal(calculateAge(new Date(2002, 1, 2), new Date(2026, 6, 18)), 24);
});

test("does not add a year before the birthday", () => {
  assert.equal(calculateAge(new Date(2002, 1, 2), new Date(2026, 0, 18)), 23);
});
