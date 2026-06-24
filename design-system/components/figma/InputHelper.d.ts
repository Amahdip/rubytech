import * as React from 'react';
export interface InputHelperProps {
  className?: string;
  style?: React.CSSProperties;
  characterCounter?: boolean;
  helperText?: boolean;
  style2?: "light" | "dark";
  /** Text content; defaults to "لورم ایپسوم متنی است آزمایشی برای ساخت نمونه اولیه". */
  text1?: string;
  /** Text content; defaults to "لورم ایپسوم متنی است آزمایشی برای ساخت نمونه اولیه". */
  text2?: string;
}
export declare const InputHelper: React.FC<InputHelperProps>;
export default InputHelper;
