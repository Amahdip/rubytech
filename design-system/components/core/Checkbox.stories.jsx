import React from 'react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Core/Checkbox',
  component: Checkbox,
  argTypes: {
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
    style: {
      control: 'select',
      options: ['light', 'dark'],
    },
  },
};

const Template = (args) => {
  const [checked, setChecked] = React.useState(args.checked || false);
  return (
    <Checkbox
      {...args}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  label: 'مرا به خاطر بسپار',
  checked: false,
  disabled: false,
  style: 'light',
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  label: 'انتخاب نسبی',
  checked: false,
  indeterminate: true,
  disabled: false,
  style: 'light',
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'گزینه غیرفعال',
  checked: true,
  disabled: true,
  style: 'light',
};

export const DarkStyle = Template.bind({});
DarkStyle.args = {
  label: 'استایل تیره (مناسب پس‌زمینه‌های تیره)',
  checked: true,
  style: 'dark',
};
DarkStyle.decorators = [
  (Story) => (
    <div style={{ backgroundColor: '#1E1E1E', padding: '16px', borderRadius: '4px' }}>
      <Story />
    </div>
  ),
];
