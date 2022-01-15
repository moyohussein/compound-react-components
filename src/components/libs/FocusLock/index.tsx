import { useCallback, useEffect, useRef, cloneElement } from "react";
import { useActiveElement } from "@hooks/useActiveElement";
import { FocusLockProps } from "@interfaces/FocusLockProps";

const FOCUSABLE_ELEMENTS = [
  "a[href]",
  "area[href]",
  'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
  "select:not([disabled]):not([aria-hidden])",
  "textarea:not([disabled]):not([aria-hidden])",
  "button:not([disabled]):not([aria-hidden])",
  "iframe",
  "object",
  "embed",
  "[contenteditable]",
  '[tabindex]:not([tabindex^="-"])',
];

const focusableElementDomString = FOCUSABLE_ELEMENTS.join(", ");

function FocusLock({
  locked,
  focusLastOnUnlock,
  children,
  initialIndex = 0,
}: FocusLockProps) {
  const focusRef = useRef<HTMLInputElement>(null);
  const focusedElBeforeOpen = useRef(useActiveElement() as HTMLElement);
  const focusLastOnUnlockRef = useRef(focusLastOnUnlock);
  const initialIndexRef = useRef<number>(initialIndex);

  useEffect(() => {
    // Remove focus from menu trigger element
    if (
      locked &&
      focusRef.current &&
      focusedElBeforeOpen &&
      !focusRef.current.contains(focusedElBeforeOpen.current)
    ) {
      focusedElBeforeOpen.current?.blur();
    }

    // Add focus to first child element with attribute of tabIndex
    if (!focusRef.current) return;
    const focusableEls: HTMLElement[] = Array.from(
      focusRef.current.querySelectorAll(focusableElementDomString)
    );
    focusableEls[initialIndexRef.current].focus();
  }, [locked]);

  useEffect(() => {
    focusLastOnUnlockRef.current = focusLastOnUnlock;
  }, [focusLastOnUnlock]);

  useEffect(() => {
    let lastFocusedElement: HTMLElement;

    if (
      locked &&
      focusRef.current &&
      focusedElBeforeOpen &&
      !focusRef.current.contains(focusedElBeforeOpen.current)
    ) {
      lastFocusedElement = focusedElBeforeOpen.current;
      lastFocusedElement.blur();
    }
    return () => {
      // Return focus to trigger element when menu is closed.
      if (focusLastOnUnlockRef.current && locked && lastFocusedElement) {
        lastFocusedElement.focus();
      }
    };
  }, [locked]);

  const lockFocus = useCallback(
    (event) => {
      if (!locked || event.key !== "Tab" || !focusRef.current) return;
      const focusableEls: HTMLElement[] = Array.from(
        focusRef.current.querySelectorAll(focusableElementDomString)
      );
      const firstFocusableEl = focusableEls[0]; // First focusable element
      const lastFocusableEl = focusableEls[focusableEls.length - 1]; // Last focusable element
      const isTabPressed = event.key === "Tab";
      // Logic to focus only the current modal focusable items.
      if (!isTabPressed) return;
      if (event.shiftKey) {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
          event.preventDefault();
        }
      } else if (document.activeElement === lastFocusableEl) {
        firstFocusableEl.focus();
        event.preventDefault();
      }
    },
    [locked]
  );

  useEffect(() => {
    document.addEventListener("keydown", lockFocus);
    return () => {
      document.removeEventListener("keydown", lockFocus);
    };
  }, [lockFocus]);

  return cloneElement(children, {ref: focusRef});
}

export default FocusLock;
