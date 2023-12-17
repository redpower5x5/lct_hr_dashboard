import React, { type FC } from 'react';

import { StyledLayout } from './styled';
import { type LayoutProps } from './types';

export const Layout: FC<LayoutProps> = ({
  children,
  backgroundColor,
  backgroundImage,
  header,
  footer
}) => (
  <StyledLayout.Wrapper
    $backgroundColor={backgroundColor}
    $backgroundImage={backgroundImage}>
    <StyledLayout.Container>
      {header && header}
      {children}
      {footer && footer}
    </StyledLayout.Container>
  </StyledLayout.Wrapper>
);
