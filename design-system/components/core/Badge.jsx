"use client";
import React from 'react';

const variantStyles = {
  brand:   { bg: 'var(--color-brand-bg)',   color: 'var(--color-brand)',     border: 'none' },
  danger:  { bg: 'var(--color-danger-bg)',  color: 'var(--color-danger)',    border: 'none' },
  success: { bg: 'var(--color-success-bg)', color: 'var(--color-tertiary)',  border: 'none' },
  warning: { bg: 'var(--color-warning-bg)', color: '#b89a00',               border: 'none' },
  info:    { bg: 'var(--color-info-bg)',    color: 'var(--color-secondary)', border: 'none' },
  neutral: { bg: 'var(--color-gray-20)',    color: 'var(--color-gray-60)',   border: 'none' },
  dark:    { bg: 'var(--color-gray-70)',    color: 'var(--color-white)',     border: 'none' },
};

/**
 * Aparat Badge — used for chips, counts, status labels, tags.
 */
export function Badge({
  children,
  variant = 'neutral',
  size = 'medium',  // 'small' | 'medium'
  dot = false,
  style = {},
}) {
  const v = variantStyles[variant] || variantStyles.neutral;
  const padding = size === 'small' ? '1px 6px' : '2px 8px';
  const fontSize = size === 'small' ? 10 : 11;

  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding,
      borderRadius: 'var(--radius-pill)',
      backgroundColor: v.bg,
      color: v.color,
      border: v.border,
      fontSize,
      fontFamily: 'var(--font-persian)',
      fontWeight: 'var(--fw-medium)',
      lineHeight: 1.4,
      whiteSpace: 'nowrap',
      direction: 'rtl',
      ...style,
    }}>
      {dot && (
        <span style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: v.color,
          flexShrink: 0,
        }} />
      )}
      {children}
    </span>
  );
}
