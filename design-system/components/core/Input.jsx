"use client";
import React from 'react';

/**
 * Aparat Input Field — supports light/dark style, RTL, labels, helper text, error state.
 */
export function Input({
  label,
  placeholder = '',
  value,
  onChange,
  type = 'text',
  size = 'medium',       // 'small' | 'medium'
  style: styleProp = 'light', // 'light' | 'dark'
  state = 'default',    // 'default' | 'focus' | 'error' | 'disabled'
  helperText,
  errorText,
  required = false,
  trailingIcon = null,
  leadingIcon = null,
  className = '',
  inputStyle = {},
  containerStyle = {},
}) {
  const [focused, setFocused] = React.useState(false);

  const isDark = styleProp === 'dark';
  const isError = state === 'error' || !!errorText;
  const isDisabled = state === 'disabled';

  const heights = { small: 32, medium: 40 };
  const h = heights[size] || 40;

  const borderColor = isError
    ? 'var(--color-danger)'
    : focused
    ? 'var(--color-brand)'
    : isDark
    ? 'var(--color-gray-60)'
    : 'var(--color-gray-30)';

  const bg = isDark ? 'var(--color-dark-02)' : 'var(--color-white)';
  const textColor = isDark ? 'var(--color-white)' : 'var(--text-body)';
  const labelColor = isDark ? 'var(--color-gray-40)' : 'var(--text-secondary)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4, direction: 'rtl', ...containerStyle }}>
      {label && (
        <label style={{
          fontSize: 'var(--text-label-size)',
          fontWeight: 'var(--fw-regular)',
          color: labelColor,
          fontFamily: 'var(--font-persian)',
          display: 'flex',
          alignItems: 'center',
          gap: 4,
        }}>
          {label}
          {required && <span style={{ color: 'var(--color-danger)' }}>*</span>}
        </label>
      )}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        height: h,
        border: `1px solid ${borderColor}`,
        borderRadius: 'var(--radius-sm)',
        backgroundColor: isDisabled ? 'var(--color-gray-20)' : bg,
        padding: '0 12px',
        gap: 8,
        transition: 'border-color 0.15s',
        overflow: 'hidden',
      }}>
        {trailingIcon && (
          <span style={{ display: 'flex', color: 'var(--icon-primary)', flexShrink: 0 }}>
            {trailingIcon}
          </span>
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={isDisabled}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            background: 'transparent',
            fontSize: 'var(--text-paragraph-size)',
            fontFamily: 'var(--font-persian)',
            color: isDisabled ? 'var(--color-gray-50)' : textColor,
            direction: 'rtl',
            textAlign: 'right',
            minWidth: 0,
            ...inputStyle,
          }}
        />
        {leadingIcon && (
          <span style={{ display: 'flex', color: 'var(--icon-primary)', flexShrink: 0 }}>
            {leadingIcon}
          </span>
        )}
      </div>
      {(helperText || errorText) && (
        <span style={{
          fontSize: 'var(--text-small-size)',
          color: isError ? 'var(--color-danger)' : 'var(--color-gray-50)',
          fontFamily: 'var(--font-persian)',
          lineHeight: 1.4,
        }}>
          {errorText || helperText}
        </span>
      )}
    </div>
  );
}
