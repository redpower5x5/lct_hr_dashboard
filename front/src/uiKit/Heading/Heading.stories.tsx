import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Heading } from './Heading';
import { type HeadingProps, HeadingSize, HeadingType } from './types';

const meta: Meta<typeof Heading> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Heading',
  component: Heading,
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Heading>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Example: Story = {
  render: (args: HeadingProps) => <Heading color='white' {...args}>Hello, world!</Heading>,
  argTypes: {
    size: {
      options: [HeadingSize.SM, HeadingSize.DF, HeadingSize.MD, HeadingSize.LG],
      control: {
        type: 'select',
        labels: {
          [HeadingSize.SM]: 'Small',
          [HeadingSize.DF]: 'Default',
          [HeadingSize.MD]: 'Medium',
          [HeadingSize.LG]: 'Large'
        }
      }
    },
    type: {
      options: [HeadingType.H1, HeadingType.H2, HeadingType.H3, HeadingType.H4],
      control: {
        type: 'select',
        labels: {
          [HeadingType.H1]: 'H1',
          [HeadingType.H2]: 'H2',
          [HeadingType.H3]: 'H3',
          [HeadingType.H4]: 'H4'
        }
      }
    }
  }
};
