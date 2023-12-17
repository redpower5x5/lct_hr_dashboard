import React, { forwardRef } from 'react';

import { StyledAvatar } from './styled';
import { type AvatarProps, AvatarSizes } from './types';

export const Avatar = forwardRef<HTMLImageElement, AvatarProps>(
  (
    { src, size = AvatarSizes.DEFAULT },
    ref
  ) => {
    return <StyledAvatar.Image ref={ref} $size={size} src={src} />;
  }
);

Avatar.displayName = 'Avatar';
