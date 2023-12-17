import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Divider } from './Divider';
import { type DividerProps } from './types';

const meta: Meta<typeof Divider> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Divider',
  component: Divider
};

export default meta;
type Story = StoryObj<typeof Divider>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Example: Story = {
  render: (args: DividerProps) => <Divider {...args} />
};
