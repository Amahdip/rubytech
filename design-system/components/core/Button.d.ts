import { ReactNode, CSSProperties, MouseEventHandler } from 'react';

/**
 * @startingPoint section="Components" subtitle="Primary action button, all sizes & variants" viewport="700x180"
 *
 * Aparat Button — use for all clickable actions.
 *
 * ```jsx
 * <Button variant="primary" size="medium">دنبال کردن</Button>
 * <Button variant="ghost" size="small">نمایش همه</Button>
 * <Button variant="secondary" size="tiny" icon="right" iconNode={<PlusIcon />}>افزودن</Button>
 * ```
 *
 * Variants: primary | secondary | tertiary | ghost
 * Sizes: tiny | small | medium | large
 * Icon position: none | left | right
 */
export interface ButtonProps {
  children?: ReactNode;
  /** Visual style */
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost';
  /** Button size */
  size?: 'tiny' | 'small' | 'medium' | 'large';
  /** Disabled state */
  disabled?: boolean;
  /** Icon slot position */
  icon?: 'none' | 'left' | 'right';
  /** Icon element */
  iconNode?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  style?: CSSProperties;
  type?: 'button' | 'submit' | 'reset';
}

export declare function Button(props: ButtonProps): JSX.Element;
