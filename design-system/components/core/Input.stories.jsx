import React from 'react';
import { Input } from './Input';

export default {
  title: 'Core/Input',
  component: Input,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
    style: {
      control: 'select',
      options: ['light', 'dark'],
    },
    state: {
      control: 'select',
      options: ['default', 'focus', 'error', 'disabled'],
    },
    required: { control: 'boolean' },
  },
};

const Template = (args) => {
  const [value, setValue] = React.useState('');
  return <Input {...args} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'نام کاربری',
  placeholder: 'مثلاً: amir',
  size: 'medium',
  style: 'light',
  state: 'default',
  required: true,
  helperText: 'لطفاً نام کاربری خود را وارد کنید.',
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  label: 'ایمیل',
  placeholder: 'example@domain.com',
  size: 'medium',
  style: 'light',
  state: 'error',
  errorText: 'ایمیل وارد شده معتبر نیست.',
};

export const DisabledState = Template.bind({});
DisabledState.args = {
  label: 'فیلد غیرفعال',
  placeholder: 'مقدار غیرقابل ویرایش',
  size: 'medium',
  style: 'light',
  state: 'disabled',
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  label: 'جستجو',
  placeholder: 'کلمه مورد نظر خود را بنویسید...',
  size: 'medium',
  style: 'light',
  state: 'default',
  trailingIcon: <span style={{ fontSize: '14px' }}>🔍</span>,
  leadingIcon: <span style={{ fontSize: '14px' }}>✕</span>,
};
