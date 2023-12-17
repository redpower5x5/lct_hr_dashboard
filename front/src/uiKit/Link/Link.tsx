import React, {
  type ComponentPropsWithoutRef,
  type ElementType,
  type PropsWithChildren
} from 'react';

import { COLORS } from '../../lib/theme/constants';

import { StyledLink } from './styled';
import { LinkSize, type LinkProps } from './types';

export const Link = <K extends ElementType = 'a'>({
  children,
  as,
  color = COLORS.BASE_COLORS.GREY[700],
  size = LinkSize.DF,
  isUnderline,
  ...props
}: LinkProps<K> & PropsWithChildren<ComponentPropsWithoutRef<K>>) => {
  return (
    <StyledLink.Link
      {...props}
      as={as as ElementType}
      $isUnderline={isUnderline}
      $color={color}
      $size={size}>
      {children}
    </StyledLink.Link>
  );
};
