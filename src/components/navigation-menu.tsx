"use client";

import { Menu, X } from "lucide-react";
import { useRef } from "react";

type NavigationItem = {
  label: string;
  href: string;
};

export function NavigationMenu({
  items,
}: {
  items: readonly NavigationItem[];
}) {
  const menuRef = useRef<HTMLElement>(null);

  function closeMenu() {
    if (menuRef.current?.matches(":popover-open")) {
      menuRef.current.hidePopover();
    }
  }

  return (
    <>
      <button
        type="button"
        className="menu-toggle"
        popoverTarget="navigation-menu"
        aria-label="Open navigation menu"
        title="Navigation"
      >
        <Menu aria-hidden="true" />
      </button>
      <nav
        ref={menuRef}
        id="navigation-menu"
        className="navigation-popover"
        popover="auto"
        aria-label="Compact navigation"
      >
        <div className="navigation-popover-heading">
          <strong>Navigation</strong>
          <button
            type="button"
            className="icon-button"
            popoverTarget="navigation-menu"
            popoverTargetAction="hide"
            aria-label="Close navigation menu"
            title="Close navigation"
          >
            <X aria-hidden="true" />
          </button>
        </div>
        <div className="navigation-popover-links">
          {items.map((item) => (
            <a href={item.href} onClick={closeMenu} key={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
