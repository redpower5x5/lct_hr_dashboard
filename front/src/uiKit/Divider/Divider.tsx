import React, { forwardRef } from 'react';

import { COLORS } from '../../lib/theme/constants';

import { StyledDivider } from './styled';
import { type DividerProps } from './types';

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  (
    { height = 1, color = COLORS.BASE_COLORS.GREY[800], ...props },
    ref
  ) => (
    <StyledDivider.Divider
      {...props}
      ref={ref}
      role='separator'
      $height={height}
      $color={color}
    />
  )
);

Divider.displayName = 'Divider';
