import React, { useRef, useContext, RefObject, KeyboardEvent } from "react";
import { useScrollLock } from "@hooks/useScrollLock";
import { useOnClickOutside } from "@hooks/useOnClickOutside";
import FocusLock from "../FocusLock";
import { AnimatePresence, motion } from "framer-motion";
import { RiCloseLine } from "react-icons/ri";
import { slideLeft, slideUp, slideDown, slideRight } from "@animations/index";
import IconButton from "../Button/IconButton";
import { classNames, uniq } from "@functions/index";
import Portal from "../Portal";
import {
  DrawerContentProps,
  DrawerFooterProps,
  DrawerProps,
  DrawerCloseButtonProps
} from "@interfaces/DrawerProps";
import { DrawerCtx } from "@contexts/index";

const idx = uniq(7);

const Drawer: React.FC<DrawerProps> = ({
  open,
  toggle,
  closeOnOverlayClick = true,
  children,
  size = "md",
  placement = "right",
  trapFocus = true,
  animationDuration = 0.25,
  focusLastOnUnlock = true,
  isFullHeight = false,
  closeOnEsc = true,
  scrollLock = true,
}) => {
  const context = {
    open,
    toggle,
    closeOnOverlayClick,
    size,
    animationDuration,
    placement,
    trapFocus,
    isFullHeight,
    focusLastOnUnlock,
    closeOnEsc,
    scrollLock,
  };

  return (
    <DrawerCtx.Provider value={context}>
      <AnimatePresence initial={false}>
        {open ? <Portal id={`drawer-portal-${idx}`}>{children}</Portal> : null}
      </AnimatePresence>
    </DrawerCtx.Provider>
  );
};

function DrawerCloseButton({ 
  ref, 
  autoFocus, 
  icon,
  size ="xs"
}: DrawerCloseButtonProps) {
  const { toggle } = useContext(DrawerCtx);

  return (
    <IconButton
      icon={icon || <RiCloseLine />}
      variant="outline"
      ref={ref}
      colorScheme="blue"
      ariaLabel="close button"
      autoFocus={autoFocus}
      size={size}
      className="absolute right-1 top-1"
      radius="full"
      onClick={toggle}
    />
  );
}

function DrawerContent({
  className,
  children,
  initialIndex,
}: DrawerContentProps) {
  const {
    open,
    closeOnOverlayClick,
    scrollLock,
    toggle,
    size,
    animationDuration,
    placement,
    closeOnEsc,
    trapFocus,
    isFullHeight,
    focusLastOnUnlock,
  } = useContext(DrawerCtx);

  const dialogRef = useRef<HTMLElement | null>(null);

  const [blockScroll, allowScroll] = useScrollLock();

  scrollLock ? (open ? blockScroll() : allowScroll()) : null;

  useOnClickOutside(dialogRef, () => {
    open && 
    closeOnOverlayClick && 
    toggle()
  });

  const drawerSizeType = size === "full" ? "w-screen h-screen inset-0" : null;

  const placementType =
    placement === "top" && isFullHeight
      ? "inset-x-0 top-0 w-[100vw] h-screen"
      : placement === "top"
      ? "inset-x-0 top-0 w-[100vw] max-h-[90vh]"
      : placement === "bottom" && isFullHeight
      ? "inset-x-0 top-0 w-[100vw] h-screen"
      : placement === "bottom"
      ? "inset-x-0 bottom-0 w-[100vw] max-h-[90vh]"
      : placement === "left" && size === "lg"
      ? "inset-y-0 left-0 max-w-[800px]"
      : placement === "left" && size === "md"
      ? "inset-y-0 left-0 max-w-[500px]"
      : placement === "left" && size === "sm"
      ? "inset-y-0 left-0 max-w-[300px]"
      : placement === "right" && size === "lg"
      ? "inset-y-0 right-0 max-w-[800px]"
      : placement === "right" && size === "md"
      ? "inset-y-0 right-0 max-w-[500px]"
      : placement === "right" && size === "sm"
      ? "inset-y-0 right-0 max-w-[300px]"
      : null;

  const animateType =
    placement === "left"
      ? slideLeft
      : placement === "right"
      ? slideRight
      : placement === "top"
      ? slideUp
      : placement === "bottom"
      ? slideDown
      : null;

  return (
    <FocusLock
      locked={trapFocus}
      focusLastOnUnlock={focusLastOnUnlock}
      initialIndex={initialIndex}
    >
      <div
        tabIndex={-1}
        onKeyDown={(event: KeyboardEvent): void => {
          closeOnEsc ? open && event.key === "Escape" && toggle() : null;
        }}
        className={`fixed flex justify-center inset-0 z-[1000] my-auto`}
      >
        <motion.section
          initial={animateType?.initial}
          animate={animateType?.animate}
          exit={animateType?.exit}
          key={`drawer-${idx}`}
          transition={{ duration: animationDuration, type: "tween" }}
          role="dialog"
          tabIndex={-1}
          aria-modal="true"
          aria-labelledby={`dialogTitle-${idx}`}
          aria-describedby={`dialogDesc-${idx}`}
          id={`drawer-container-${idx}`}
          ref={dialogRef}
          className={classNames(
            `${className} ${drawerSizeType} ${placementType} fixed bg-white flex flex-col`
          )}
        >
          <div className="w-full h-full relative flex flex-col">
            {children}
          </div>
        </motion.section>
      </div>
    </FocusLock>
  );
}

type DrawerHeaderProps = {
  children: React.ReactNode;
  className?: string;
};

function DrawerHeader({ children, className }: DrawerHeaderProps) {
  return (
    <header
      id={`dialogTitle-${idx}`}
      className={classNames(
        `${className} capitalize flex-none w-full text-center px-5 tablet:px-10 py-5 font-bold`
      )}
    >
      {children}
    </header>
  );
}

type DrawerBodyProps = {
  children: React.ReactNode;
  className?: string;
};

function DrawerBody({ children, className }: DrawerBodyProps) {
  return (
    <div
      id={`dialogDesc-${idx}`}
      tabIndex={-1}
      className={classNames(
        `${className} px-5 tablet:px-10 py-5 w-full flex-1 text-justify font-light overflow-y-auto`
      )}
    >
      {children}
    </div>
  );
}

function DrawerFooter({ children, className }: DrawerFooterProps) {
  return (
    <footer
      id={`dialogFooter-${idx}`}
      className={classNames(
        `${className} w-full px-5 tablet:px-10 py-3 flex-none`
      )}
    >
      {children}
    </footer>
  );
}

export {
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
};
