import React from 'react';
import { Tag } from './Tag';

export default {
  title: 'Core/Tag',
  component: Tag,
  argTypes: {
    active: { control: 'boolean' },
    closable: { control: 'boolean' },
  },
};

const Template = (args) => {
  const [active, setActive] = React.useState(args.active || false);
  return (
    <Tag
      {...args}
      active={active}
      onClick={() => setActive(!active)}
    >
      تگ دکمه‌ای
    </Tag>
  );
};

export const Interactive = Template.bind({});
Interactive.args = {
  active: false,
  closable: false,
};

export const Closable = (args) => {
  const [visible, setVisible] = React.useState(true);
  if (!visible) return <span style={{ color: 'var(--color-gray-50)', fontSize: 12 }}>تگ بسته شد</span>;
  return (
    <Tag
      {...args}
      closable
      onClose={() => setVisible(false)}
    >
      تگ قابل بستن
    </Tag>
  );
};
Closable.args = {
  active: false,
};

export const TagGroup = () => {
  const [selected, setSelected] = React.useState('science');
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      {['ورزشی', 'علمی', 'آموزشی', 'کمدی'].map((label, idx) => {
        const id = ['sports', 'science', 'education', 'comedy'][idx];
        return (
          <Tag
            key={id}
            active={selected === id}
            onClick={() => setSelected(id)}
          >
            {label}
          </Tag>
        );
      })}
    </div>
  );
};
