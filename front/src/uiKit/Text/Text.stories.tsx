import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';
import { type TextProps, TextSize } from './types';

const meta: Meta<typeof Text> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Text',
  component: Text,
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Text>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Example: Story = {
  render: (args: TextProps) => (
    <Text {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
      posuere.
    </Text>
  ),
  argTypes: {
    size: {
      options: [
        TextSize.S3,
        TextSize.M1,
        TextSize.L3
      ],
      control: {
        type: 'select',
        labels: {
          [TextSize.S3]: 'Small 3',
          [TextSize.M1]: 'Medium 1',
          [TextSize.L3]: 'Large 3'
        }
      }
    }
  }
};
