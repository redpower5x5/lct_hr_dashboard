import React, { forwardRef, type HTMLAttributes, type PropsWithChildren } from 'react';

import { Styled } from '@component/Card/styled';

export const Card = forwardRef<HTMLDivElement, PropsWithChildren<HTMLAttributes<HTMLDivElement>>>(({ children, ...props }, ref) => {
  return <Styled.Card {...props} ref={ref}>{children}</Styled.Card>;
});

Card.displayName = 'Card';
