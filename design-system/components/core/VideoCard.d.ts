import { CSSProperties } from 'react';

/**
 * Aparat VideoCard — the main content unit in video grids.
 *
 * ```jsx
 * <VideoCard
 *   thumbnail="/thumb.jpg"
 *   duration="14:45"
 *   title="این یک عنوان ویدیو است!"
 *   channelName="کانال آقای فلانی"
 *   views="۱.۴ هزار بازدید"
 *   timeAgo="۸ هفته پیش"
 * />
 * <VideoCard isLive title="پخش زنده" channelName="کانال" />
 * ```
 */
export interface VideoCardProps {
  thumbnail?: string;
  duration?: string;
  title?: string;
  channelName?: string;
  views?: string;
  timeAgo?: string;
  /** Show LIVE badge instead of duration */
  isLive?: boolean;
  style?: CSSProperties;
  onClick?: () => void;
}

export declare function VideoCard(props: VideoCardProps): JSX.Element;
