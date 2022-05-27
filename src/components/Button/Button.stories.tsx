import React from 'react';
import { Story, Meta } from '@storybook/react';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'default',
};

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  label: 'Primary Button',
};

export const Dashed = Template.bind({});
Dashed.args = {
  type: 'dashed',
  label: 'Dashed',
};

export const Label = Template.bind({});
Label.args = {
  label: 'Label',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  label: 'Button',
};
