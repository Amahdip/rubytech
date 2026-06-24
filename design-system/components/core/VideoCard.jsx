"use client";
import React from 'react';

/**
 * Aparat Video Card — the core content unit shown in video grids.
 * Displays thumbnail, duration, title, channel name, views, and timestamp.
 */
export function VideoCard({
  thumbnail,
  duration,
  title,
  channelName,
  views,
  timeAgo,
  isLive = false,
  style = {},
  onClick,
}) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        cursor: 'pointer',
        direction: 'rtl',
        ...style,
      }}
    >
      {/* Thumbnail */}
      <div style={{
        position: 'relative',
        borderRadius: 'var(--radius-md)',
        overflow: 'hidden',
        aspectRatio: '16/9',
        backgroundColor: 'var(--color-gray-30)',
        flexShrink: 0,
      }}>
        {thumbnail
          ? <img src={thumbnail} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', transform: hovered ? 'scale(1.03)' : 'scale(1)', transition: 'transform 0.2s' }} />
          : <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--color-gray-30)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M8 5.14v14l11-7-11-7z" fill="var(--color-gray-50)"/></svg>
            </div>
        }
        {/* Duration / LIVE badge */}
        <div style={{
          position: 'absolute', bottom: 6, left: 6,
          backgroundColor: isLive ? 'var(--color-danger)' : 'rgba(0,0,0,0.72)',
          color: '#fff',
          fontSize: 10,
          fontFamily: 'var(--font-latin)',
          fontWeight: 700,
          padding: '2px 5px',
          borderRadius: 3,
          letterSpacing: 0.3,
        }}>
          {isLive ? 'LIVE' : duration}
        </div>
      </div>

      {/* Info */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <div style={{
          fontSize: 'var(--text-link-title-size)',
          fontFamily: 'var(--font-persian)',
          fontWeight: 'var(--fw-regular)',
          color: hovered ? 'var(--color-brand)' : 'var(--text-heading)',
          lineHeight: 'var(--text-link-title-line)',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          transition: 'color 0.15s',
        }}>
          {title || 'این یک عنوان ویدیو است!'}
        </div>
        <div style={{
          fontSize: 'var(--text-meta-size)',
          fontFamily: 'var(--font-persian)',
          color: 'var(--text-meta)',
          lineHeight: 'var(--text-meta-line)',
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
        }}>
          <span>{channelName || 'کانال آقای فلانی'}</span>
          <span>{views || '۱.۴ هزار بازدید'} · {timeAgo || '۸ هفته پیش'}</span>
        </div>
      </div>
    </div>
  );
}
