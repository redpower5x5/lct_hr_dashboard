import React, { forwardRef } from 'react';

import { Styled } from './styled';
import { type TableBodyProps } from './types';

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(({ children, ...props }, ref) => {
  return <Styled.TableBody {...props} ref={ref}>{children}</Styled.TableBody>;
});

TableBody.displayName = 'TableBody';
