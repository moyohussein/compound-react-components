import { classNames } from "@functions/index";
import { OverlayProps } from "@interfaces/OverlayProps";

export function Overlay({ id, className, blur = true }: OverlayProps) {
  const blurType = blur ? "backdrop-blur-sm" : null;

  return (
    <div
      aria-hidden="true"
      id={id}
      className={classNames(
        `${className} ${blurType} fixed flex h-full w-full inset-0 bg-black/50`
      )}
    />
  );
}
