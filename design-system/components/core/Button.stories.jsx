import React from 'react';
import { Button } from './Button';

export default {
  title: 'Core/Button',
  component: Button,
  argTypes: {
    size: {
      control: 'select',
      options: ['tiny', 'small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'ghost'],
    },
    disabled: { control: 'boolean' },
    icon: {
      control: 'select',
      options: ['none', 'left', 'right'],
    },
  },
};

const Template = (args) => <Button {...args}>دکمه نمونه</Button>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  size: 'medium',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  size: 'medium',
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  size: 'medium',
};

export const WithIcon = (args) => (
  <Button {...args} icon="right" iconNode={<span>★</span>}>
    دکمه ستاره‌دار
  </Button>
);
WithIcon.args = {
  variant: 'primary',
  size: 'medium',
};

export const Sizes = () => (
  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
    <Button size="tiny">خیلی کوچک</Button>
    <Button size="small">کوچک</Button>
    <Button size="medium">متوسط</Button>
    <Button size="large">بزرگ</Button>
  </div>
);
