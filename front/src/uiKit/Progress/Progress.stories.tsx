import React from 'react';

import { type ProgressProps } from '@uiKit/Progress/types';

import type { Meta, StoryObj } from '@storybook/react';

import { COLORS, RADIUSES } from '../../lib/theme/constants';

import { Progress } from './Progress';

const meta: Meta<typeof Progress> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Flex',
  component: Progress
};

export default meta;
type Story = StoryObj<typeof Progress>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Example: Story = {
  render: (args: ProgressProps) => (
    <Progress {...args} />
  )
};
