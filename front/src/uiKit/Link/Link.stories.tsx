import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Link } from './Link';
import { LinkSize } from './types';

const meta: Meta<typeof Link> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Link',
  component: Link,
  argTypes: {
    as: {
      control: {
        type: 'text'
      }
    },
    size: {
      options: [
        LinkSize.SM,
        LinkSize.DF,
        LinkSize.MD,
        LinkSize.LG
      ],
      control: { type: 'select' }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Link>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Example: Story = {
  render: (args: any) => (
    <Link {...args} href='#'>
      Link
    </Link>
  )
};
