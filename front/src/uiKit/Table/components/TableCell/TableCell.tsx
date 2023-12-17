import React, { forwardRef } from 'react';

import { Styled } from './styled';
import { type TableCellProps } from './types';

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(({ children, ...props }, ref) => {
  return <Styled.TableCell {...props} ref={ref}>{children}</Styled.TableCell>;
});

TableCell.displayName = 'TableRow';
