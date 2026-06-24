import * as React from 'react';
export interface TitleDescriptionProps {
  className?: string;
  style?: React.CSSProperties;
  style2?: "light" | "dark";
  /** Text content; defaults to "لورم ایپسوم متنی است آزمایشی برای ساخت در صنعت چاپ.". */
  text1?: string;
}
export declare const TitleDescription: React.FC<TitleDescriptionProps>;
export default TitleDescription;
