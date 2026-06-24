import { ReactNode, CSSProperties } from 'react';

/**
 * Aparat Tag / Filter Chip — for categories, video tags, filter selectors.
 *
 * ```jsx
 * <Tag>دسته‌بندی‌ها</Tag>
 * <Tag active>بعدا می‌بینم</Tag>
 * <Tag closable onClose={() => {}}>فیلم</Tag>
 * ```
 */
export interface TagProps {
  children?: ReactNode;
  /** Active / selected state */
  active?: boolean;
  onClick?: () => void;
  /** Show close button */
  closable?: boolean;
  onClose?: () => void;
  style?: CSSProperties;
}

export declare function Tag(props: TagProps): JSX.Element;
