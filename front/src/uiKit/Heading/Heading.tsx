import React, { type FC, forwardRef } from 'react';

import { COLORS } from '../../lib/theme/constants';

import { getHeadingSize, getHeadingTag } from './helpers';
import { StyleHeading } from './styled';
import { type HeadingProps, HeadingType } from './types';

export const Heading: FC<HeadingProps> = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      type = HeadingType.H1,
      size,
      fontWeight = 600,
      color = COLORS.BASE_COLORS.DARK,
      align,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <StyleHeading.Main
        {...props}
        as={getHeadingTag(type) as undefined}
        $color={color}
        $fontWeight={fontWeight}
        $size={size ?? getHeadingSize(type)}
        $align={align}
        ref={ref}>
        {children}
      </StyleHeading.Main>
    );
  }
);

Heading.displayName = 'Heading';
