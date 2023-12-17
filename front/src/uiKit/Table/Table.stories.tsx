import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '..';
import { COLORS } from '../../lib/theme/constants';
import { TextSize } from '../Text/types';

import { TableBody, TableCell, TableRow } from './components';
import { Table } from './Table';
import { type TableProps } from './types';

const meta: Meta<typeof Table> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Table',
  component: Table
};

export default meta;
type Story = StoryObj<typeof Table>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Example: Story = {
  render: (args: TableProps) => {
    return (
      <Table {...args}>
        <TableBody>
          <TableRow>
            <TableCell>
              <Text size={TextSize.M1} fontWeight={600} color={COLORS.BASE_COLORS.GREY[700]}>Лидеры Цифровой Трансформации</Text>
            </TableCell>
            <TableCell align='right'>
              <Text size={TextSize.M1} fontWeight={600} color={COLORS.BASE_COLORS.LIGHT}>победа, 2 место</Text>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Text size={TextSize.M1} fontWeight={600} color={COLORS.BASE_COLORS.GREY[700]}>Magnetic Code Hackathon</Text>
            </TableCell>
            <TableCell align='right'>
              <Text size={TextSize.M1} fontWeight={600} color={COLORS.BASE_COLORS.LIGHT}>победа</Text>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Text size={TextSize.M1} fontWeight={600} color={COLORS.BASE_COLORS.GREY[700]}>VK NFT HACK</Text>
            </TableCell>
            <TableCell align='right'>
              <Text size={TextSize.M1} fontWeight={600} color={COLORS.BASE_COLORS.LIGHT}>3 место</Text>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Text size={TextSize.M1} fontWeight={600} color={COLORS.BASE_COLORS.GREY[700]}>Авиахакатон</Text>
            </TableCell>
            <TableCell align='right'>
              <Text size={TextSize.M1} fontWeight={600} color={COLORS.BASE_COLORS.LIGHT}>2 место</Text>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Text size={TextSize.M1} fontWeight={600} color={COLORS.BASE_COLORS.GREY[700]}>Умный город</Text>
            </TableCell>
            <TableCell align='right'>
              <Text size={TextSize.M1} fontWeight={600} color={COLORS.BASE_COLORS.LIGHT}>победа</Text>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Text size={TextSize.M1} fontWeight={600} color={COLORS.BASE_COLORS.GREY[700]}>Moscow city hack</Text>
            </TableCell>
            <TableCell align='right'>
              <Text size={TextSize.M1} fontWeight={600} color={COLORS.BASE_COLORS.LIGHT}>3 место</Text>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  },
  args: {
    rowSpace: 24,
    fullWidth: true,
    'aria-label': 'Достижения за выбранный год'
  }
};
