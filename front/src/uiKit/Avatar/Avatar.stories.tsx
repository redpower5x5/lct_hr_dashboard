import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';
import { type AvatarProps, AvatarSizes } from './types';

const meta: Meta<typeof Avatar> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Avatar',
  component: Avatar,
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Avatar>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Example: Story = {
  render: (args: AvatarProps) => <Avatar size={AvatarSizes.LARGE} {...args} />,
  args: {
    src: 'https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
  },
  argTypes: {
    size: {
      options: [AvatarSizes.SMALL, AvatarSizes.DEFAULT, AvatarSizes.LARGE],
      control: {
        type: 'select',
        labels: {
          [AvatarSizes.SMALL]: 'Small',
          [AvatarSizes.DEFAULT]: 'Default',
          [AvatarSizes.LARGE]: 'Large'
        }
      }
    }
  }
};
