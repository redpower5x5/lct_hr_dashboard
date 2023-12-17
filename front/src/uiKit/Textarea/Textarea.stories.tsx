import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './Textarea';
import { type TextareaProps } from './types';

const meta: Meta<typeof Textarea> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Textarea',
  component: Textarea
};

export default meta;
type Story = StoryObj<typeof Textarea>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Docs: Story = {
  render: (args: TextareaProps) => (
    <Textarea {...args} />
  )
};
