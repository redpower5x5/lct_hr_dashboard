import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { COLORS, RADIUSES } from '../../lib/theme/constants';

import { Flex } from './Flex';
import {
  FlexAlignContent,
  FlexAlignItems,
  FlexDirection,
  FlexJustifyContent,
  FlexJustifyItems,
  type FlexProps
} from './types';

const meta: Meta<typeof Flex> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Flex',
  component: Flex,
  argTypes: {
    alignItems: {
      options: [
        FlexAlignItems.START,
        FlexAlignItems.CENTER,
        FlexAlignItems.END,
        FlexAlignItems.FLEX_START,
        FlexAlignItems.FLEX_END
      ],
      control: {
        type: 'select',
        lables: {
          [FlexAlignItems.START]: 'Start',
          [FlexAlignItems.CENTER]: 'Center',
          [FlexAlignItems.END]: 'End',
          [FlexAlignItems.FLEX_START]: 'Flex start',
          [FlexAlignItems.FLEX_END]: 'Flex end'
        }
      }
    },
    alignContent: {
      options: [
        FlexAlignContent.START,
        FlexAlignContent.CENTER,
        FlexAlignContent.END,
        FlexAlignContent.FLEX_START,
        FlexAlignContent.FLEX_END,
        FlexAlignContent.SPACE_AROUND,
        FlexAlignContent.SPACE_BETWEEN,
        FlexAlignContent.SPACE_EVENLY
      ],
      control: {
        type: 'select',
        lables: {
          [FlexAlignContent.START]: 'Start',
          [FlexAlignContent.CENTER]: 'Center',
          [FlexAlignContent.END]: 'End',
          [FlexAlignContent.FLEX_START]: 'Flex start',
          [FlexAlignContent.FLEX_END]: 'Flex end',
          [FlexAlignContent.SPACE_AROUND]: 'Space around',
          [FlexAlignContent.SPACE_BETWEEN]: 'Space between',
          [FlexAlignContent.SPACE_EVENLY]: 'Space evenly'
        }
      }
    },
    justifyItems: {
      options: [
        FlexJustifyItems.START,
        FlexJustifyItems.CENTER,
        FlexJustifyItems.END,
        FlexJustifyItems.FLEX_START,
        FlexJustifyItems.FLEX_END
      ],
      control: {
        type: 'select',
        lables: {
          [FlexJustifyItems.START]: 'Start',
          [FlexJustifyItems.CENTER]: 'Center',
          [FlexJustifyItems.END]: 'End',
          [FlexJustifyItems.FLEX_START]: 'Flex start',
          [FlexJustifyItems.FLEX_END]: 'Flex end'
        }
      }
    },
    justifyContent: {
      options: [
        FlexJustifyContent.START,
        FlexJustifyContent.CENTER,
        FlexJustifyContent.END,
        FlexJustifyContent.FLEX_START,
        FlexJustifyContent.FLEX_END,
        FlexJustifyContent.SPACE_AROUND,
        FlexJustifyContent.SPACE_BETWEEN,
        FlexJustifyContent.SPACE_EVENLY
      ],
      control: {
        type: 'select',
        lables: {
          [FlexJustifyContent.START]: 'Start',
          [FlexJustifyContent.CENTER]: 'Center',
          [FlexJustifyContent.END]: 'End',
          [FlexJustifyContent.FLEX_START]: 'Flex start',
          [FlexJustifyContent.FLEX_END]: 'Flex end',
          [FlexJustifyContent.SPACE_AROUND]: 'Space around',
          [FlexJustifyContent.SPACE_BETWEEN]: 'Space between',
          [FlexJustifyContent.SPACE_EVENLY]: 'Space evenly'
        }
      }
    },
    direction: {
      options: [FlexDirection.COLUMN, FlexDirection.ROW],
      control: {
        type: 'select',
        lables: {
          [FlexDirection.COLUMN]: 'Column',
          [FlexDirection.ROW]: 'Row'
        }
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof Flex>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const SingleItem: Story = {
  render: (args: FlexProps) => (
    <Flex {...args} style={{ height: '250px' }}>
      <div
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: COLORS.BASE_COLORS.LIGHT,
          borderRadius: RADIUSES.DEFAULT
        }}></div>
    </Flex>
  )
};

export const Items: Story = {
  render: (args: FlexProps) => (
    <Flex {...args} fullWidth style={{ height: '250px' }}>
      <div
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: COLORS.BASE_COLORS.DARK,
          borderRadius: RADIUSES.DEFAULT
        }}></div>
      <div
        style={{
          width: '50px',
          height: '50px',
          backgroundColor: COLORS.BASE_COLORS.DARK,
          borderRadius: RADIUSES.DEFAULT
        }}></div>
    </Flex>
  )
};
