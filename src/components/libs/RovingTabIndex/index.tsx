import { useCallback, useEffect, useRef } from "react";
import { useActiveElement } from "@hooks/useActiveElement";
import { RovingTabIndexProps } from "@interfaces/RovingTabIndexProps";

const FOCUSABLE_ELEMENTS = ["[tabindex]:not([disabled]):not([aria-hidden])"];

const focusableElementDomString = FOCUSABLE_ELEMENTS.join(", ");

export default function RovingTabIndex({
  locked,
  focusLastOnUnlock,
  children,
  initialIndex = 0,
  id,
  open = true,
  tabIndex,
  role,
  className,
}: RovingTabIndexProps) {
  const tabRef = useRef<HTMLDivElement | null>(null);
  const currentFocusIndex = useRef<number | null>(null);
  const countIndex = useRef<number | null>(null);
  const focusedElBeforeOpen = useRef(useActiveElement() as HTMLElement);
  const focusLastOnUnlockRef = useRef(focusLastOnUnlock);
  const initialIndexRef = useRef(initialIndex);

  useEffect(() => {
    // Remove focus from menu trigger element
    if (
      locked &&
      tabRef.current &&
      focusedElBeforeOpen &&
      !tabRef.current.contains(focusedElBeforeOpen.current)
    ) {
      focusedElBeforeOpen.current?.blur();
    }

    // Add focus to first child element with attribute of tabIndex
    if (!tabRef.current) return;
    const focusableEls: HTMLElement[] = Array.from(
      tabRef.current.querySelectorAll(focusableElementDomString)
    );
    currentFocusIndex.current = initialIndexRef.current;
    focusableEls[initialIndexRef.current].focus();
  }, [open, locked]);

  useEffect(() => {
    focusLastOnUnlockRef.current = focusLastOnUnlock;
  }, [focusLastOnUnlock]);

  useEffect(() => {
    let lastFocusedElement: HTMLElement;

    if (
      locked &&
      tabRef.current &&
      focusedElBeforeOpen &&
      !tabRef.current.contains(focusedElBeforeOpen.current)
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

  useEffect(() => {
    const disableArrowScroll = (event: KeyboardEvent): void => {
      if (open && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
        event.preventDefault();
      }
    };

    document.addEventListener("keydown", disableArrowScroll);

    return (): void =>
      document.removeEventListener("keydown", disableArrowScroll);
  }, [open]);

  const handleUserKeyPress = useCallback((event) => {
    // Get all targeted elements
    if (!tabRef.current) return;
    const focusableEls: HTMLElement[] = Array.from(
      tabRef.current.querySelectorAll(focusableElementDomString)
    );

    const { key } = event;

    // Printable Keys
    if (/[a-zA-Z0-9./<>?;:"'`!@#$%^&*()\\[\]{}_+=|\\-~,]/.test(key)) {
      let alphabetArray: Array<number> = [];

      // Create mutable value that initializes as the currentFocusIndex value
      countIndex.current = initialIndex;

      // Get the first letter of elements that matches the pressed key
      focusableEls.filter((elem, idx) => {
        if (
          elem?.textContent?.toLowerCase().charAt(0) === key.toLowerCase() ||
          elem?.getAttribute("aria-label")?.toLowerCase().charAt(0) ===
            key.toLowerCase()
        ) {
          alphabetArray.push(idx);
        }
      });

      // Move focus to target elements
      const moveFocus = (initialIndex: number): void => {
        focusableEls[alphabetArray[initialIndex]].focus();
      };

      if (alphabetArray.length <= 0) return;
      if (alphabetArray.length > 0 && initialIndexRef.current !== null) {
        if (
          document.activeElement?.textContent?.toLowerCase().charAt(0) ===
            key.toLowerCase() ||
          document.activeElement
            ?.getAttribute("aria-label")
            ?.toLowerCase()
            .charAt(0) === key.toLowerCase()
        ) {
          if (
            document.activeElement ===
            focusableEls[alphabetArray[alphabetArray.length - 1]]
          ) {
            initialIndexRef.current = 0;
            moveFocus(0);
          } else {
            initialIndexRef.current += 1;
            moveFocus(initialIndexRef.current);
          }
        } else {
          initialIndexRef.current = 0;
          moveFocus(initialIndexRef.current);
        }
        currentFocusIndex.current = alphabetArray[initialIndexRef.current];
      }
    }
  }, [initialIndex]);

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  const lockFocus = useCallback(
    (event) => {
      if (!locked || !tabRef.current) return;

      // Get all children element with attribute of tabIndex
      const focusableEls = Array.from(
        tabRef.current.querySelectorAll(focusableElementDomString)
      ) as HTMLElement[];

      // Handles moving the focus between menu items
      const moveFocus = (itemIndex: number): void => {
        currentFocusIndex.current = itemIndex;
        focusableEls[itemIndex].focus();
      };

      const { key } = event;

      // Create mutable value that initializes as the currentFocusIndex value
      let newFocusIndex: number | null = currentFocusIndex.current;

      // Handle keyboard controls
      if (["Enter", "ArrowUp", "ArrowDown", "Home", "End"].includes(key)) {
        // Controls the current index to focus
        if (newFocusIndex !== null) {
          if (key === "Tab") return;
          if (key === "ArrowUp") {
            newFocusIndex -= 1;
          } else if (key === "ArrowDown") {
            newFocusIndex += 1;
          }

          if (newFocusIndex > focusableEls.length - 1 || key === "Home") {
            newFocusIndex = 0;
          } else if (newFocusIndex < 0 || key === "End") {
            newFocusIndex = focusableEls.length - 1;
          }
        }

        // After any modification set state to the modified value
        if (newFocusIndex !== null) {
          moveFocus(newFocusIndex);
        }
        return;
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

  return (
    <div
      id={id}
      tabIndex={tabIndex}
      className={className}
      role={role}
      ref={tabRef}
    >
      {children}
    </div>
  );
}
