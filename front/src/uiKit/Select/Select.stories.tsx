import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Select } from './Select';
import { type SelectProps, SelectSize } from './types';

const meta: Meta<typeof Select> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Select',
  component: Select,
  argTypes: {
    size: {
      options: [SelectSize.SM, SelectSize.DF, SelectSize.LG],
      control: {
        type: 'select',
        labels: {
          [SelectSize.SM]: 'Small',
          [SelectSize.DF]: 'Default',
          [SelectSize.LG]: 'Large'
        }
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Select>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Docs: Story = {
  render: (args: SelectProps) => (
    <Select {...args} />
  ),
  args: {
    options: [
      { value: 'chocolate', label: 'Chocolate' },
      { value: 'strawberry', label: 'Strawberry' },
      { value: 'vanilla', label: 'Vanilla' }
    ]
  }
};
