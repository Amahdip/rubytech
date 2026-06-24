"use client";
import React from 'react';

const sizeMap = {
  tiny:   { height: 28, padding: '0 10px', fontSize: 11,   gap: 4,  iconSize: 14 },
  small:  { height: 32, padding: '0 14px', fontSize: 12,   gap: 6,  iconSize: 16 },
  medium: { height: 36, padding: '0 16px', fontSize: 12.5, gap: 6,  iconSize: 16 },
  large:  { height: 44, padding: '0 20px', fontSize: 13,   gap: 8,  iconSize: 18 },
};

const typeMap = {
  primary:   { bg: 'var(--color-brand)',     color: '#fff', border: 'none', hoverBg: 'var(--color-brand-dark)' },
  secondary: { bg: 'var(--color-secondary)', color: '#fff', border: 'none', hoverBg: '#0491d0' },
  tertiary:  { bg: 'var(--color-tertiary)',  color: '#fff', border: 'none', hoverBg: '#009a5a' },
  ghost:     { bg: 'transparent',           color: 'var(--color-brand)', border: '1.5px solid var(--color-brand)', hoverBg: 'var(--color-brand-bg)' },
};

/**
 * Aparat Button component.
 * @param {'tiny'|'small'|'medium'|'large'} size
 * @param {'primary'|'secondary'|'tertiary'|'ghost'} variant
 * @param {boolean} disabled
 * @param {'none'|'left'|'right'} icon  Position of icon slot
 * @param {React.ReactNode} iconNode    Icon element to render
 * @param {string} className
 * @param {React.CSSProperties} style
 */
export function Button({
  children,
  size = 'medium',
  variant = 'primary',
  disabled = false,
  icon = 'none',
  iconNode = null,
  onClick,
  className = '',
  style = {},
  type = 'button',
}) {
  const s = sizeMap[size] || sizeMap.medium;
  const t = typeMap[variant] || typeMap.primary;

  const [hovered, setHovered] = React.useState(false);

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    fontSize: s.fontSize,
    fontFamily: 'var(--font-persian)',
    fontWeight: 'var(--fw-medium)',
    lineHeight: 1,
    borderRadius: 'var(--radius-sm)',
    border: t.border || 'none',
    backgroundColor: disabled ? 'var(--color-gray-30)' : hovered ? t.hoverBg : t.bg,
    color: disabled ? 'var(--color-gray-50)' : t.color,
    cursor: disabled ? 'not-allowed' : 'pointer',
    userSelect: 'none',
    transition: 'background-color 0.15s, opacity 0.15s',
    outline: 'none',
    whiteSpace: 'nowrap',
    direction: 'rtl',
    flexDirection: icon === 'left' ? 'row-reverse' : 'row',
    ...style,
  };

  return (
    <button
      type={type}
      className={className}
      style={base}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {icon !== 'none' && iconNode && (
        <span style={{ display: 'flex', alignItems: 'center', width: s.iconSize, height: s.iconSize }}>
          {iconNode}
        </span>
      )}
      {children}
    </button>
  );
}
