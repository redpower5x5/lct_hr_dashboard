import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Image } from '../Image';

import { ImageObjectFit, type ImageProps } from './types';

const meta: Meta<typeof Image> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Image',
  component: Image,
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Image>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Example: Story = {
  render: (args: ImageProps) => <Image style={{ height: '550px' }} {...args} />,
  args: {
    images: [
      { type: 'png', image: 'https://images.unsplash.com/photo-1695062006036-cca98d012907?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3735&q=80' }
    ]
  },
  argTypes: {
    objectFit: {
      control: { type: 'select' },
      options: [
        ImageObjectFit.COVER,
        ImageObjectFit.CONTAIN
      ]
    }
  }
};
