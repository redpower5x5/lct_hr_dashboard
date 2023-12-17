import React, { forwardRef } from 'react';

import { type TableRowProps } from '@uiKit/Table/components/TableRow/types';

import { Styled } from './styled';

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(({ children, ...props }, ref) => {
  return <Styled.TableRow {...props} ref={ref}>{children}</Styled.TableRow>;
});

TableRow.displayName = 'TableRow';
