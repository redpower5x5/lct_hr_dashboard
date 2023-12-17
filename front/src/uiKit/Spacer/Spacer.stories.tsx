import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Spacer } from './Spacer';
import { type SpacerProps } from './types';

const meta: Meta<typeof Spacer> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Spacer',
  component: Spacer,
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Spacer>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Example: Story = {
  render: (args: SpacerProps) => <Spacer {...args} />
};
