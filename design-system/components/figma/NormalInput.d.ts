import * as React from 'react';
export interface NormalInputProps {
  className?: string;
  style?: React.CSSProperties;
  titleDesc?: boolean;
  helper?: boolean;
  style2?: "light" | "dark";
}
export declare const NormalInput: React.FC<NormalInputProps>;
export default NormalInput;
