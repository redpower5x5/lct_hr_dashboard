import React, { forwardRef } from 'react';

import { COLORS } from '../../lib/theme/constants/colors';

import { StyleText } from './styled';
import { type TextProps, TextSize } from './types';

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      size = TextSize.S3,
      fontWeight,
      color = COLORS.BASE_COLORS.DARK,
      align,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <StyleText.Main
        {...props}
        ref={ref}
        $color={color}
        $fontWeight={fontWeight}
        $size={size}
        $align={align}>
        {children}
      </StyleText.Main>
    );
  }
);

Text.displayName = 'Text';
