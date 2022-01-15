import { memo, useEffect, useRef, useState, RefObject } from "react";
import { createPortal } from "react-dom";
import { PortalProps } from "@interfaces/PortalProps";

const Portal = ({ id, children }: PortalProps) => {
  const [mounted, setMounted] = useState<boolean>(false);
  const el: RefObject<HTMLElement | any> = useRef(
    (typeof document !== "undefined" && document.getElementById(id)) ||
      (typeof document !== "undefined" && document.createElement("div"))
  );
  const [dynamic] = useState(!el?.current.parentElement);
  useEffect(() => {
    let observerRefValue: any = null; 
    dynamic && ((el.current.id = id), document.body.appendChild(el.current));
    observerRefValue = el.current
    return () => {
      dynamic &&
      observerRefValue.parentElement &&
        observerRefValue.parentElement.removeChild(observerRefValue);
    };
  }, [id, dynamic]);
  useEffect(() => setMounted(true), [mounted]);
  if (!mounted) return null;
  return createPortal(children, el?.current);
};

export default memo(Portal);
