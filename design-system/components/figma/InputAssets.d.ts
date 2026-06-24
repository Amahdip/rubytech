import * as React from 'react';
export interface InputAssetsProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md";
  requiredField?: boolean;
  tooltip?: boolean;
  style2?: "light" | "dark";
  /** Text content; defaults to "(اﺟﺒﺎری)". */
  text1?: string;
  /** Text content; defaults to "ﻟﯿﻨﮏ وﯾﺪﯾﻮ ﺷﻤﺎ". */
  text2?: string;
  /** Text content; defaults to "*". */
  text3?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const InputAssets: React.FC<InputAssetsProps>;
export default InputAssets;
