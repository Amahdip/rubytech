import { CSSProperties, ChangeEventHandler } from 'react';

/**
 * Aparat Checkbox.
 *
 * ```jsx
 * <Checkbox label="همه را انتخاب کن" checked={true} onChange={handleChange} />
 * <Checkbox label="گزینه" indeterminate />
 * <Checkbox style="dark" label="گزینه تیره" />
 * ```
 */
export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /** Color theme */
  style?: 'light' | 'dark';
}

export declare function Checkbox(props: CheckboxProps): JSX.Element;
