import { useRef, useContext, KeyboardEvent, Fragment } from "react";
import { useScrollLock } from "@hooks/useScrollLock";
import { useOnClickOutside } from "@hooks/useOnClickOutside";
import { AnimatePresence, motion } from "framer-motion";
import { grow, fadeUp, rotate } from "@animations/index";
import FocusLock from "../FocusLock";
import Portal from "../Portal";
import { classNames, uniq } from "@functions/index";
import IconButton from "../Button/IconButton";
import {
  ModalBodyProps,
  ModalCloseButtonProps,
  ModalContentProps,
  ModalFooterProps,
  ModalHeaderProps,
  ModalProps,
} from "@interfaces/ModalProps";
import { ModalCtx } from "@contexts/index";
import { RiCloseLine } from "react-icons/ri";

const idx = uniq(7);

const Modal: React.FC<ModalProps> = ({
  children,
  open,
  toggle,
  scrollLock = true,
  trapFocus = true,
  focusLastOnUnlock = true,
  closeOnEsc = true,
  isCentered = false,
  scrollBehaviour = "inside",
  size = "md",
  animation = "grow",
  animationDuration = 0.25,
  closeOnOverlayClick = true,
}) => {
  const context = {
    open,
    toggle,
    scrollLock,
    trapFocus,
    focusLastOnUnlock,
    closeOnEsc,
    animationDuration,
    isCentered,
    scrollBehaviour,
    size,
    animation,
    closeOnOverlayClick,
  };

  return (
    <ModalCtx.Provider value={context}>
      <AnimatePresence initial={false}>
        {open ? <Portal id={`modal-portal-${idx}`}>{children}</Portal> : null}
      </AnimatePresence>
    </ModalCtx.Provider>
  );
};

function ModalOverlay() {
  return (
    <div
      aria-hidden="true"
      id={`modal-overlay-${idx}`}
      className="bg-black bg-opacity-50 fixed inset-0"
    />
  );
}

function ModalCloseButton({
  ref,
  autoFocus,
  icon,
  size ="xs"
}: ModalCloseButtonProps) {
  const { toggle } = useContext(ModalCtx);

  return (
    <IconButton
      icon={icon || <RiCloseLine />}
      variant="ghost"
      ref={ref}
      colorScheme="none"
      ariaLabel="close-button"
      autoFocus={autoFocus}
      size={size}
      className="absolute drop-shadow-none right-1 top-1"
      radius="full"
      onClick={toggle}
    />
  );
}

function ModalContent({ 
  children, 
  className,
  initialIndex
}: ModalContentProps) {
  const {
    open,
    scrollLock,
    isCentered,
    closeOnOverlayClick,
    scrollBehaviour,
    size,
    animation,
    trapFocus,
    focusLastOnUnlock,
    closeOnEsc,
    animationDuration,
    toggle,
  } = useContext(ModalCtx);

  const dialogRef = useRef<HTMLElement | null>(null);

  const [blockScroll, allowScroll] = useScrollLock();

  scrollLock ? (open ? blockScroll() : allowScroll()) : null;

  const scrollBehaviourType =
    scrollBehaviour === "inside"
      ? "overflow-y-hidden"
      : scrollBehaviour === "outside"
      ? "overflow-y-auto"
      : "flex-none";

  const isCenteredType = isCentered ? "items-center" : "items-start";

  useOnClickOutside(dialogRef, () => {
    open && 
    closeOnOverlayClick && 
    toggle()
  });

  const modalSizeType =
    size === "full"
      ? "w-screen h-screen"
      : size === "xl"
      ? "max-w-[1140px] my-20"
      : size === "lg"
      ? "max-w-[800px] my-20"
      : size === "md"
      ? "max-w-[500px] my-20"
      : size === "sm"
      ? "max-w-[300px] my-20"
      : null;

  const animateType =
    animation === "grow"
      ? grow
      : animation === "fadeUp"
      ? fadeUp
      : animation === "rotate"
      ? rotate
      : null;

  return (
    <FocusLock 
      locked={trapFocus} 
      focusLastOnUnlock={focusLastOnUnlock}
      initialIndex={initialIndex}
    >
      <div
        onKeyDown={(event: KeyboardEvent): void => {
          closeOnEsc ? open && event.key === "Escape" && toggle() : null;
        }}
        className={classNames(
          `${scrollBehaviourType} ${isCenteredType} fixed flex justify-center inset-0 z-[1000] my-auto`
        )}
      >
        <motion.section
          initial={animateType?.initial}
          animate={animateType?.animate}
          exit={animateType?.exit}
          key={`modal-${idx}`}
          tabIndex={-1}
          transition={{ duration: animationDuration, type: "tween" }}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`dialogTitle-${idx}`}
          aria-describedby={`dialogDesc-${idx}`}
          id={`modal-container-${idx}`}
          ref={dialogRef}
          className={classNames(
            `${className} ${modalSizeType} relative min-w-[350px] rounded-lg shadow-md bg-white w-full `
          )}
          >
          {children}
        </motion.section>
      </div>
    </FocusLock>
  );
}

function ModalHeader({ className, children }: ModalHeaderProps) {

  return (
    <header
      id={`dialogTitle-${idx}`}
      className={classNames(
        `${className} text-pen-b font-semibold capitalize w-full text-center px-5 tablet:px-10 py-5 rounded-t-lg flex-none`
      )}
    >
      {children}
    </header>
  );
}

function ModalBody({ className, children }: ModalBodyProps) {
  const { scrollBehaviour } = useContext(ModalCtx);

  const scrollBehaviourType =
    scrollBehaviour === "inside" ? "max-h-[60vh]" : null;

  return (
    <div
      tabIndex={-1}
      id={`dialogDesc-${idx}`}
      className={classNames(
        `${className} ${scrollBehaviourType} flex-auto overflow-y-auto w-full font-light px-5 tablet:px-10 py-5 `
      )}
    >
      {children}
    </div>
  );
}

function ModalFooter({ className, children }: ModalFooterProps) {
  return (
    <footer
      id={`dialogFooter-${idx}`}
      className={classNames(
        `${className} w-full px-5 tablet:px-10 flex-none py-3`
      )}
    >
      {children}
    </footer>
  );
}

export {
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
};
