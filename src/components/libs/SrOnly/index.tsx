import { SrOnlyProps } from "@interfaces/SrOnlyProps";

export const SrOnly = ({ children }: SrOnlyProps) => (
  <span className="sr-only"> {children}</span>
);
