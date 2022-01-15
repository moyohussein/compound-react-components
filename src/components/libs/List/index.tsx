import React, { useContext } from "react";
import { classNames } from "@functions/index";
import { ListCtx, ListItemProps, ListProps } from "@interfaces/ListProps";

const List: React.FC<ListProps> = ({
  className,
  children,
  width = "auto",
  divider = false,
  spacing = "sm",
  dividerColor = "grey",
  listStylePosition = "outside",
  listStyleType = "unstyled",
  start,
  gutters = true,
  ulRef,
  olRef,
}) => {
  const context = { spacing, gutters, listStyleType };

  const widthType =
    width === "auto" ? "w-auto" : width === "full" ? "w-full" : null;

  const dividerType = divider ? "divide-solid divide-y" : null;

  const dividerColorType =
    dividerColor === "grey"
      ? "divide-[#d9d9d9] divide-opacity-50"
      : dividerColor === "white"
      ? "divide-[#ffffff]"
      : dividerColor === "black"
      ? "divide-[#000000] divide-opacity-50"
      : null;

  const listStylePositionType =
    listStylePosition === "inside"
      ? "list-inside"
      : listStylePosition === "outside"
      ? "list-outside"
      : null;

  const typeListStyleType =
    listStyleType === "ul"
      ? "list-disc"
      : listStyleType === "unstyled"
      ? "list-none"
      : listStyleType === "menu"
      ? "list-none"
      : listStyleType === "ol"
      ? "list-decimal"
      : null;

  const listClassNames = classNames(
    `${className} ${dividerColorType} ${dividerType} ${widthType} ${listStylePositionType} ${typeListStyleType} py-2 flex flex-col justify-center h-[max-content]`
  );

  return (
    <ListCtx.Provider value={context}>
      {listStyleType === "ol" ? (
        <ol ref={olRef} start={start} className={listClassNames} role="list">
          {children}
        </ol>
      ) : (
        <ul
          ref={ulRef}
          className={listClassNames}
          role={listStyleType === "menu" ? "menu" : "list"}
        >
          {children}
        </ul>
      )}
    </ListCtx.Provider>
  );
};

const ListItem = ({ className, children, onClick }: ListItemProps) => {
  const { spacing, gutters, listStyleType } = useContext(ListCtx);

  const spacingType =
    spacing === "none"
      ? "py-0"
      : spacing === "sm"
      ? "py-1"
      : spacing === "md"
      ? "py-2"
      : spacing === "lg"
      ? "py-3"
      : null;

  const guttersType = gutters ? "px-4" : null;

  return (
    <li
      onClick={onClick}
      className={classNames(`${className} ${guttersType} ${spacingType}`)}
      role={listStyleType === "menu" ? "menuitem" : "listitem"}
    >
      {children}
    </li>
  );
};

export { List, ListItem };
