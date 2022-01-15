import {
  ElementType,
  ComponentProps,
  forwardRef,
  Ref,
  ReactElement,
} from "react";

export type BaseOwnProps<E extends ElementType = ElementType> = {
  as?: E;
};

export type BaseProps<E extends ElementType> = BaseOwnProps<E> &
  Omit<ComponentProps<E>, keyof BaseOwnProps>;

const defaultElement = "div";

export const Base: <E extends ElementType = typeof defaultElement>(
  props: BaseProps<E>
) => ReactElement | null = forwardRef(function Base(
  props: BaseOwnProps,
  ref: Ref<Element>
) {
  const Element = props.as || defaultElement;
  return <Element ref={ref} {...props} as={undefined} />;
});
