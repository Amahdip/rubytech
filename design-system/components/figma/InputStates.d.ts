import * as React from 'react';
export interface InputStatesProps {
  className?: string;
  style?: React.CSSProperties;
  state?: "default" | "hover" | "filled" | "focused" | "disabled" | "error";
  style2?: "dark" | "light";
}
export declare const InputStates: React.FC<InputStatesProps>;
export default InputStates;
