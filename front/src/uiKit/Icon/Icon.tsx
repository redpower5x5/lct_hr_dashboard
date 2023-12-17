import React, { forwardRef } from 'react';

import { COLORS } from '../../lib/theme/constants';

import { getImage } from './helpers';
import { StyledIcon } from './styled';
import { type IconProps, IconSize } from './types';

export const Icon = forwardRef<HTMLDivElement, IconProps>(
  (
    {
      size = IconSize.X16,
      color = COLORS.BASE_COLORS.LIGHT,
      image,
      label,
      ...props
    },
    ref
  ) => {
    return (
      <StyledIcon.Container
        {...props}
        role='img'
        aria-label={label}
        $color={color}
        $size={size}
        $icon={getImage(image)}
        ref={ref}
      />
    );
  }
);

Icon.displayName = 'Icon';
