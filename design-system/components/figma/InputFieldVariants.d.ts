import * as React from 'react';
export interface InputFieldVariantsProps {
  className?: string;
  style?: React.CSSProperties;
  inputTitle?: boolean;
  direction?: "rtl" | "ltr";
  trailingIcon?: boolean;
  leadingIcon?: boolean;
  style2?: "light" | "dark";
  /** Text content; defaults to "aparat.com". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const InputFieldVariants: React.FC<InputFieldVariantsProps>;
export default InputFieldVariants;
