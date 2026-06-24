import { ReactNode, CSSProperties, ChangeEventHandler } from 'react';

/**
 * Aparat Input Field.
 *
 * ```jsx
 * <Input label="عنوان ویدیو" placeholder="عنوان را وارد کنید" required />
 * <Input label="جستجو" state="error" errorText="این فیلد اجباری است" />
 * <Input style="dark" placeholder="جستجو..." trailingIcon={<SearchIcon />} />
 * ```
 */
export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  type?: string;
  /** Input height */
  size?: 'small' | 'medium';
  /** Color theme */
  style?: 'light' | 'dark';
  state?: 'default' | 'focus' | 'error' | 'disabled';
  helperText?: string;
  errorText?: string;
  required?: boolean;
  /** Icon on the trailing (right, RTL start) side */
  trailingIcon?: ReactNode;
  /** Icon on the leading (left, RTL end) side */
  leadingIcon?: ReactNode;
  className?: string;
  inputStyle?: CSSProperties;
  containerStyle?: CSSProperties;
}

export declare function Input(props: InputProps): JSX.Element;
