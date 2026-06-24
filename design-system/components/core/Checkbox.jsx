"use client";
import React from 'react';

/**
 * Aparat Checkbox — supports light/dark style and indeterminate state.
 */
export function Checkbox({
  label,
  checked = false,
  indeterminate = false,
  disabled = false,
  onChange,
  style: styleProp = 'light',
  style = {},
}) {
  const isDark = styleProp === 'dark';
  const borderColor = checked || indeterminate
    ? 'var(--color-brand)'
    : isDark ? 'var(--color-gray-50)' : 'var(--color-gray-40)';
  const bg = checked || indeterminate ? 'var(--color-brand)' : 'transparent';
  const textColor = isDark ? 'var(--color-white)' : 'var(--text-body)';

  return (
    <label style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      direction: 'rtl',
      opacity: disabled ? 0.5 : 1,
      ...style,
    }}>
      <span style={{
        width: 16,
        height: 16,
        borderRadius: 'var(--radius-sm)',
        border: `1.5px solid ${borderColor}`,
        backgroundColor: bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        transition: 'all 0.15s',
      }}>
        {(checked || indeterminate) && (
          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
            {indeterminate
              ? <line x1="1" y1="4" x2="9" y2="4" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
              : <polyline points="1.5,4 3.5,6.5 8.5,1.5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            }
          </svg>
        )}
      </span>
      {label && (
        <span style={{
          fontSize: 'var(--text-label-size)',
          fontFamily: 'var(--font-persian)',
          color: textColor,
        }}>
          {label}
        </span>
      )}
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={onChange}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
      />
    </label>
  );
}
