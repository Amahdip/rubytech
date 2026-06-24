import * as React from 'react';
export type IconName =
  | "AddIcon"
  | "AppWindow"
  | "ArrowDownIcon"
  | "ChartLineUp"
  | "Chat"
  | "Color"
  | "Columns"
  | "Confetti"
  | "GearSix"
  | "HelpIcon"
  | "HomeBlack"
  | "Layout"
  | "LikeIcon"
  | "Notification"
  | "PaintBrushBroad"
  | "Play"
  | "RadioButton"
  | "Sidebar"
  | "Tag"
  | "TextHOne"
  | "Textbox"
  | "VideoCamera";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number | string;
}
export declare const Icon: React.FC<IconProps>;
export default Icon;
