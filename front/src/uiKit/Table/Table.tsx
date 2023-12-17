import React, { forwardRef } from 'react';

import { type TableProps } from '@uiKit/Table/types';

import { Styled } from './styled';

export const Table = forwardRef<HTMLTableElement, TableProps>(({ children, fullWidth, rowSpace = 0, ...props }, ref) => {
  return <Styled.Table $fullWidth={fullWidth} $rowSpace={rowSpace} {...props} ref={ref}>{children}</Styled.Table>;
});

Table.displayName = 'Table';
