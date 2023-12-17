import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '../Icon';
import { Images } from '../Icon/constants/images';
import { type IconProps, IconSize } from '../Icon/types';

const meta: Meta<typeof Icon> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Icon',
  component: Icon,
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Icon>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Example: Story = {
  render: (args: IconProps) => <Icon {...args} />,
  args: {
    image: Images.DANGER,
    size: IconSize.X24
  },
  argTypes: {
    image: {
      options: Object.values(Images).filter((val) => typeof val === 'number'),
      control: { type: 'select' }
    },
    size: {
      options: [
        IconSize.X12,
        IconSize.X16,
        IconSize.X20,
        IconSize.X24,
        IconSize.X32
      ],
      control: { type: 'select' }
    }
  }
};
