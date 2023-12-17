import React, { forwardRef } from 'react';

import { StyledFlex } from './styled';
import { type FlexProps } from './types';

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      children,
      direction,
      justifyContent,
      alignItems,
      justifyItems,
      alignContent,
      fullHeight,
      fullWidth,
      flex,
      flexWrap,
      gap,
      ...props
    },
    ref
  ) => {
    return (
      <StyledFlex.Container
        ref={ref}
        $direction={direction}
        $justifyContent={justifyContent}
        $alignItems={alignItems}
        $justifyItems={justifyItems}
        $alignContent={alignContent}
        $fullHeight={fullHeight}
        $fullWidth={fullWidth}
        $flex={flex}
        $flexWrap={flexWrap}
        $gap={gap}
        {...props}>
        {children}
      </StyledFlex.Container>
    );
  }
);

Flex.displayName = 'Flex';
