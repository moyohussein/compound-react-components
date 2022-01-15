export interface FocusLockProps {
  locked: boolean | undefined;
  focusLastOnUnlock: boolean | undefined;
  initialIndex?: number | undefined;
  children: React.ReactElement;
}
