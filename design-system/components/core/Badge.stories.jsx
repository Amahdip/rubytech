import React from 'react';
import { Badge } from './Badge';

export default {
  title: 'Core/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: 'select',
      options: ['brand', 'danger', 'success', 'warning', 'info', 'neutral', 'dark'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium'],
    },
    dot: { control: 'boolean' },
  },
};

const Template = (args) => <Badge {...args}>بج نمونه</Badge>;

export const Default = Template.bind({});
Default.args = {
  variant: 'neutral',
  size: 'medium',
  dot: false,
};

export const Brand = Template.bind({});
Brand.args = {
  variant: 'brand',
  size: 'medium',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  size: 'medium',
  dot: true,
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  size: 'small',
  dot: true,
};

export const Variants = () => (
  <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
    <Badge variant="neutral">Neutral</Badge>
    <Badge variant="brand">Brand</Badge>
    <Badge variant="success" dot>Success</Badge>
    <Badge variant="danger" dot>Danger</Badge>
    <Badge variant="warning">Warning</Badge>
    <Badge variant="info">Info</Badge>
    <Badge variant="dark">Dark</Badge>
  </div>
);
