import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { COLORS } from '../../lib/theme/constants';
import { Images } from '../Icon/constants/images';
import { Icon } from '../Icon/Icon';

import { IconButton } from './IconButton';
import { type IconButtonProps } from './types';

const meta: Meta<typeof IconButton> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'IconButton',
  component: IconButton,
  argTypes: {}
};

export default meta;
type Story = StoryObj<typeof IconButton>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Example: Story = {
  render: (args: IconButtonProps) => (
    <IconButton {...args} label='Go to'>
      <Icon
        aria-hidden={true}
        image={Images.DANGER}
        color={COLORS.BASE_COLORS.LIGHT}
      />
    </IconButton>
  )
};
