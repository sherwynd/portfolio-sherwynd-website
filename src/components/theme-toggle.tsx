"use client";

import { Moon, Sun } from "lucide-react";
import type { MouseEvent } from "react";
import {
  getNextTheme,
  THEME_STORAGE_KEY,
  type Theme,
} from "../lib/theme";

function getDocumentTheme(): Theme {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

export function ThemeToggle() {
  function handleThemeChange(event: MouseEvent<HTMLButtonElement>) {
    const nextTheme = getNextTheme(getDocumentTheme());
    const root = document.documentElement;
    const nextLabel =
      nextTheme === "light" ? "Switch to dark theme" : "Switch to light theme";

    root.dataset.theme = nextTheme;
    root.style.colorScheme = nextTheme;
    event.currentTarget.setAttribute("aria-label", nextLabel);
    event.currentTarget.title = nextLabel;

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // The selected theme still applies when storage is unavailable.
    }
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={handleThemeChange}
      aria-label="Toggle light and dark theme"
      title="Toggle light and dark theme"
    >
      <Sun className="theme-icon theme-icon-sun" aria-hidden="true" />
      <Moon className="theme-icon theme-icon-moon" aria-hidden="true" />
    </button>
  );
}
