import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { COLORS, SPACINGS } from '../../lib/theme/constants';
import { Icon } from '../Icon';
import { Images } from '../Icon/constants/images';
import { Spacer } from '../Spacer';

import { Button } from './Button';
import { type ButtonProps, ButtonSize, ButtonVariant } from './types';

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: [ButtonVariant.PRIMARY, ButtonVariant.SECONDARY],
      control: {
        type: 'select',
        labels: {
          [ButtonVariant.PRIMARY]: 'Primary',
          [ButtonVariant.SECONDARY]: 'Secondary'
        }
      },
      defaultValue: ButtonVariant.PRIMARY
    },
    size: {
      options: [ButtonSize.SM, ButtonSize.DF, ButtonSize.LG],
      control: {
        type: 'select',
        labels: {
          [ButtonSize.SM]: 'Small',
          [ButtonSize.DF]: 'Default',
          [ButtonSize.LG]: 'Large'
        }
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Button>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args: ButtonProps) => (
    <Button {...args} variant={ButtonVariant.PRIMARY}>
      Вступить в клуб
    </Button>
  )
};

export const Secondary: Story = {
  render: (args: ButtonProps) => (
    <Button {...args} variant={ButtonVariant.SECONDARY}>
      Вступить в клуб
    </Button>
  )
};

export const WithIcon: Story = {
  render: (args: ButtonProps) => (
    <Button {...args} variant={ButtonVariant.SECONDARY}>
      Вступить в клуб
      <Spacer space={SPACINGS.X16} />
      <Icon
          image={Images.DANGER}
          color={COLORS.BASE_COLORS.LIGHT}
          label='Join'
      />
    </Button>
  )
};
