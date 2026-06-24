import { ReactNode, CSSProperties } from 'react';

/**
 * Aparat Badge / Chip — inline status indicator.
 *
 * ```jsx
 * <Badge variant="brand">جدید</Badge>
 * <Badge variant="danger" dot>خطا</Badge>
 * <Badge variant="success" size="small">تایید شده</Badge>
 * ```
 */
export interface BadgeProps {
  children?: ReactNode;
  variant?: 'brand' | 'danger' | 'success' | 'warning' | 'info' | 'neutral' | 'dark';
  size?: 'small' | 'medium';
  /** Show a colored dot before content */
  dot?: boolean;
  style?: CSSProperties;
}

export declare function Badge(props: BadgeProps): JSX.Element;
