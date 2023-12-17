import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input';
import { type InputProps, InputSize } from './types';

const meta: Meta<typeof Input> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Input',
  component: Input,
  argTypes: {
    size: {
      options: [InputSize.SM, InputSize.DF, InputSize.LG],
      control: {
        type: 'select',
        labels: {
          [InputSize.SM]: 'Small',
          [InputSize.DF]: 'Default',
          [InputSize.LG]: 'Large'
        }
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Input>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Docs: Story = {
  render: (args: InputProps) => (
    <Input {...args} />
  ),
  args: {
    placeholder: '+593',
    label: 'Phone number'
  }
};
