export interface RovingTabIndexProps {
  locked: boolean | undefined;
  focusLastOnUnlock: boolean | undefined;
  children: React.ReactNode;
  initialIndex?: number | undefined;
  id: string;
  tabIndex?: number;
  className?: string;
  open?: boolean;
  role: string;
}
