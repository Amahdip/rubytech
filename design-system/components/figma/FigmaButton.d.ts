import * as React from 'react';
export interface ButtonProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "big" | "md" | "sm" | "tiny";
  icon?: "left" | "no" | "right";
  state?: "normal" | "hover";
  type?: "primary" | "seconadary" | "confirm blue" | "just text";
  style2?: "light" | "dark";
  text?: string;
  /** Text content; defaults to "دنبال کردن". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const FigmaButton: React.FC<ButtonProps>;
export default FigmaButton;
