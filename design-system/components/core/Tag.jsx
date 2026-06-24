"use client";
import React from 'react';

/**
 * Aparat Tag — used for categories, video tags, filter chips.
 */
export function Tag({
  children,
  active = false,
  onClick,
  closable = false,
  onClose,
  style = {},
}) {
  return (
    <span
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 4,
        padding: '4px 10px',
        borderRadius: 'var(--radius-pill)',
        backgroundColor: active ? 'var(--color-brand-bg)' : 'var(--color-gray-20)',
        color: active ? 'var(--color-brand)' : 'var(--text-secondary)',
        border: active ? '1px solid var(--color-brand)' : '1px solid var(--color-gray-30)',
        fontSize: 'var(--text-caption-size)',
        fontFamily: 'var(--font-persian)',
        fontWeight: 'var(--fw-regular)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'all 0.15s',
        whiteSpace: 'nowrap',
        direction: 'rtl',
        userSelect: 'none',
        ...style,
      }}
    >
      {children}
      {closable && (
        <span
          onClick={e => { e.stopPropagation(); onClose && onClose(); }}
          style={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            opacity: 0.6,
            fontSize: 12,
            lineHeight: 1,
          }}
        >×</span>
      )}
    </span>
  );
}
