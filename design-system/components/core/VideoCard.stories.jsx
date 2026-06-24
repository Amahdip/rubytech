import React from 'react';
import { VideoCard } from './VideoCard';

export default {
  title: 'Core/VideoCard',
  component: VideoCard,
  argTypes: {
    isLive: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <VideoCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'دوره جامع آموزش فرانت اند و ری‌اکت در ۱۰ ساعت',
  channelName: 'آکادمی برنامه‌نویسی',
  views: '۲۴.۸ هزار بازدید',
  timeAgo: '۳ روز پیش',
  duration: '10:42',
  thumbnail: '',
  isLive: false,
};

export const Live = Template.bind({});
Live.args = {
  title: 'پخش زنده فوتبال پرسپولیس و استقلال - جام حذفی کشور',
  channelName: 'ورزش سه زنده',
  views: '۱۵.۲ هزار تماشاگر',
  timeAgo: 'هم‌اکنون',
  isLive: true,
  thumbnail: '',
};

export const WithImage = Template.bind({});
WithImage.args = {
  title: 'بک‌استیج مستند مسابقات رالی بین‌المللی تهران',
  channelName: 'رالی کلاب',
  views: '۳.۱ هزار بازدید',
  timeAgo: '۲ هفته پیش',
  duration: '14:05',
  thumbnail: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=400&q=80',
};
