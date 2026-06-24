import * as React from 'react';
export interface CheckboxesProps {
  className?: string;
  style?: React.CSSProperties;
  active?: "selected" | "deselected" | "neutral" | "active4" | "active5" | "active6";
  style2?: "dark" | "light";
}
export declare const Checkboxes: React.FC<CheckboxesProps>;
export default Checkboxes;
