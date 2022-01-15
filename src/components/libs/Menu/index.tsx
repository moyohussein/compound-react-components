import React, {
  useRef,
  KeyboardEvent,
  MouseEvent,
  useContext,
  useState,
  cloneElement,
  ReactElement,
  ReactNode,
} from "react";
import Button from "../Button";
import { usePopper } from "react-popper";
import Portal from "../Portal";
import { AnimatePresence, motion } from "framer-motion";
import { classNames, getValidChildren, uniq } from "@functions/index";
import { grow, fade, collapse } from "@animations/index";
import { useOnClickOutside } from "@hooks/useOnClickOutside";
import RovingTabIndex from "../RovingTabIndex";
import { IoRadioButtonOn } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";
import {
  MenuButtonProps,
  MenuGroupProps,
  MenuListItemProps,
  MenuListOptionProps,
  MenuListProps,
  MenuOptionGroupProps,
  MenuProps,
} from "@interfaces/MenuProps";
import { useRouter } from "next/router";
import { MenuCtx } from "@contexts/index";

const idx = uniq(7);

const Menu: React.FC<MenuProps> = ({
  children,
  open,
  toggle,
  colorScheme = "black",
  trapFocus = true,
  spacing = "none",
  focusLastOnUnlock = true,
  placement = "bottom-start",
  radius = "md",
  closeOnOutsideClick = true,
  autoFocus = true,
  arrow = false,
  closeOnEsc = true,
  animation = "collapse",
  verticalOffset = 0,
  horizontalOffset = 0,
  animationDuration = 0.25,
  borderColor = "grey",
}) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);

  const context = {
    open,
    toggle,
    colorScheme,
    autoFocus,
    trapFocus,
    focusLastOnUnlock,
    closeOnEsc,
    arrow,
    spacing,
    borderColor,
    radius,
    placement,
    animation,
    animationDuration,
    referenceElements: [referenceElement, setReferenceElement],
    popperElements: [popperElement, setPopperElement],
    arrowElements: [arrowElement, setArrowElement],
    horizontalOffset,
    verticalOffset,
  };

  const ref = useRef<HTMLDivElement | null>(null);

  useOnClickOutside(ref, () => {
    open && 
    closeOnOutsideClick && 
    toggle()
  });
  
  return (
    <MenuCtx.Provider value={context}>
      <div ref={ref}>{children}</div>
    </MenuCtx.Provider>
  );
};

function MenuButton({
  children,
  className,
  size = "md",
  variant = "outline",
  colorScheme = "black",
  grayscale = true,
  rightIcon,
  leftIcon,
}: MenuButtonProps) {
  const { referenceElements, toggle, open } = useContext(MenuCtx);
  const [referenceElement, setReferenceElement] = referenceElements;

  const grayscaleType = grayscale ? "peer-focus-within:grayscale" : null;

  return (
    <Button
      radius="md"
      aria-haspopup="menu"
      aria-expanded={open}
      onClick={toggle}
      variant={variant}
      colorScheme={colorScheme}
      aria-controls="menu"
      size={size}
      rightIcon={rightIcon}
      leftIcon={leftIcon}
      ref={setReferenceElement}
      className={classNames(`drop-shadow-none ${className} ${grayscaleType}`)}
    >
      {children}
    </Button>
  );
}

function MenuList({ children, className, initialIndex }: MenuListProps) {
  const {
    open,
    toggle,
    closeOnEsc,
    focusLastOnUnlock,
    trapFocus,
    referenceElements,
    animation,
    popperElements,
    arrowElements,
    arrow,
    radius,
    placement,
    horizontalOffset,
    verticalOffset,
    animationDuration,
    borderColor,
  } = useContext(MenuCtx);

  const [popperElement, setPopperElement] = popperElements;
  const [referenceElement, setReferenceElement] = referenceElements;
  const [arrowElement, setArrowElement] = arrowElements;
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: placement,
    modifiers: [
      { name: "arrow", options: { element: arrowElement } },
      {
        name: "offset",
        enabled: true,
        options: { offset: [horizontalOffset, verticalOffset] },
      },
    ],
  });

  const radiusType =
    radius === "sm"
      ? "rounded-sm"
      : radius === "md"
      ? "rounded-md"
      : radius === "lg"
      ? "rounded-lg"
      : radius === "xl"
      ? "rounded-xl"
      : radius === "none"
      ? "rounded-none"
      : null;

  const arrowPosType = placement?.startsWith("top")
    ? { bottom: "-4px" }
    : placement?.startsWith("bottom")
    ? { top: "-4px" }
    : placement?.startsWith("left")
    ? { right: "-4px" }
    : placement?.startsWith("right")
    ? { left: "-4px" }
    : "";

  const animateType =
    animation === "grow"
      ? grow
      : animation === "fade"
      ? fade
      : animation === "collapse"
      ? collapse
      : null;

  const borderColorType =
    borderColor === "grey"
      ? "border border-[#e6e6e6]"
      : borderColor === "white"
      ? "border border-[#fff]"
      : borderColor === "black"
      ? "border border-[#000]"
      : borderColor === "none"
      ? null
      : null;

  const arrowBorderColorType =
    borderColor === "grey"
      ? "before:border-[#e6e6e6]"
      : borderColor === "white"
      ? "before:border-[#fff]"
      : borderColor === "black"
      ? "before:border-[#000]"
      : borderColor === "none"
      ? "before:border-transparent"
      : null;

  const arrowBorderType = placement?.startsWith("top")
    ? `before:border-r before:border-b`
    : placement?.startsWith("bottom")
    ? `before:border-t before:border-l`
    : placement?.startsWith("left")
    ? `before:border-t before:border-r`
    : placement?.startsWith("right")
    ? `before:border-b before:border-l`
    : null;

  return (
    <AnimatePresence initial={false}>
      {open ? (
        <Portal id={`menu-portal-${idx}`}>
          <div
            ref={setPopperElement}
            style={styles.popper}
            className="z-30"
            {...attributes.popper}
          >
            <motion.div
              initial={animateType?.initial}
              animate={animateType?.animate}
              exit={animateType?.exit}
              key={`menu-${idx}`}
              onKeyDown={(event: KeyboardEvent): void => {
                closeOnEsc ? open && event.key === "Escape" && toggle() : null,
                  open && event.key === "Tab" && toggle();
              }}
              style={{
                transformOrigin: placement?.startsWith("top")
                  ? "bottom"
                  : "top",
              }}
              transition={{ duration: animationDuration, type: "tween" }}
              className={`bg-[#fff] dark:bg-[#1A202C]`}
            >
              {arrow ? (
                <div
                  key="arrow"
                  ref={setArrowElement}
                  style={Object.assign({}, styles.arrow, arrowPosType)}
                  className={classNames(
                    `${arrowBorderColorType} ${arrowBorderType} invisible bg-[#fff] dark:bg-[#1A202C] dark:before:bg-[#1A202C] absolute w-2 h-2 before:absolute before:w-2 before:h-2 before:bg-[#fff]  before:visible before:transform before:rotate-[45deg] peer`
                  )}
                />
              ) : null}
              <RovingTabIndex
                id="menu"
                role="menu"
                tabIndex={-1}
                className={classNames(
                  `${className} ${radiusType} ${borderColorType} shadow-xl z-[100] flex flex-col py-2`
                )}
                locked={trapFocus}
                focusLastOnUnlock={focusLastOnUnlock}
                initialIndex={initialIndex}
              >
                {children}
              </RovingTabIndex>
            </motion.div>
          </div>
        </Portal>
      ) : null}
    </AnimatePresence>
  );
}

function MenuGroup({ children, className, title }: MenuGroupProps) {
  const renderChildren = getValidChildren(children, (item: ReactNode) =>
    Boolean(
      item &&
        (item as ReactElement).type &&
        (item as ReactElement).type === MenuListItem
    )
  ) as ReactElement[];

  return (
    <div role="group" aria-labelledby="menuGroupId" className="flex flex-col">
      <h6
        id="menuGroupId"
        className={classNames(
          `${className} mx-[25px] my-2 text-[14px] font-semibold capitalize`
        )}
      >
        {title}
      </h6>
      {renderChildren}
    </div>
  );
}

function MenuOptionGroup({
  children,
  className,
  title,
  type = "radio",
  onChange,
  value,
  defaultValue,
}: MenuOptionGroupProps) {
  const [selected, setSelected] = useState<string | Array<string> | undefined>(
    defaultValue || value
  );
  const typeOfType = type === "radio" ? "radiogroup" : "group";

  const handleClick = (event: MouseEvent) => {
    const target = event.target as HTMLButtonElement;

    if (type === "radio") {
      setSelected(target.value);
    } else if (type === "checkbox") {
      console.log([selected]);
    } else return null;
  };

  const renderChildren = getValidChildren(children, (item: ReactNode) =>
    Boolean(
      item &&
        (item as ReactElement).type &&
        (item as ReactElement).type === MenuListOption
    )
  ) as ReactElement[];

  return (
    <div
      role={typeOfType}
      aria-labelledby="menuOptionGroupId"
      className="flex flex-col"
    >
      <h6
        id="menuOptionGroupId"
        className={classNames(
          `${className} mx-[25px] my-2 text-[14px] font-semibold capitalize`
        )}
      >
        {title}
      </h6>
      {renderChildren.map((child, idx) =>
        cloneElement(child, {
          className: classNames(`${className}`),
          onClick: handleClick,
          checked:
            type === "radio"
              ? selected === child.props.value
              : type === "checkbox"
              ? selected?.includes(child.props.value)
              : null,
          type: `menuitem${type}`,
          key: idx,
        })
      )}
    </div>
  );
}

function MenuListItem({
  children,
  className,
  disabled = false,
  onClick,
}: MenuListItemProps) {
  const { spacing, colorScheme } = useContext(MenuCtx);
  const spacingType =
    spacing === "none"
      ? "h-10"
      : spacing === "sm"
      ? "h-[44px]"
      : spacing === "md"
      ? "h-[48px]"
      : spacing === "lg"
      ? "h-[52px]"
      : null;

  return (
    <Button
      onClick={onClick}
      role="menuitem"
      size="sm"
      disabled={disabled}
      isFullWidth
      colorScheme={colorScheme}
      variant="text"
      radius="none"
      tabIndex={-1}
      className={classNames(
        `${className} ${spacingType} justify-start focus:ring-offset-0 font-light select-none active:scale-100`
      )}
    >
      {children}
    </Button>
  );
}

function MenuListOption({
  children,
  className,
  value,
  checked,
  disabled = false,
  onClick,
  type,
}: MenuListOptionProps) {
  const { spacing, colorScheme } = useContext(MenuCtx);

  const spacingType =
    spacing === "none"
      ? "h-10"
      : spacing === "sm"
      ? "h-[44px]"
      : spacing === "md"
      ? "h-[48px]"
      : spacing === "lg"
      ? "h-[52px]"
      : null;

  return (
    <Button
      onClick={onClick}
      role={type}
      disabled={disabled}
      isFullWidth
      colorScheme={colorScheme}
      value={value}
      aria-checked={checked}
      variant={checked ? "ghost" : "text"}
      radius="none"
      tabIndex={-1}
      className={classNames(
        `${className} ${spacingType} justify-start focus:ring-offset-0 font-light select-none active:scale-100 peer`
      )}
    >
      {type === "menuitemradio" ? (
        <IoRadioButtonOn className="invisible mr-2.5 peer-aria-checked:visible text-current" />
      ) : (
        <GiCheckMark className="invisible mr-2.5 peer-aria-checked:visible text-current" />
      )}
      {children}
    </Button>
  );
}

export {
  Menu,
  MenuButton,
  MenuList,
  MenuListItem,
  MenuGroup,
  MenuOptionGroup,
  MenuListOption,
};
// https://inclusive-components.design/menus-menu-buttons/
