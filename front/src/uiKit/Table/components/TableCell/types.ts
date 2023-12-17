import { type HTMLAttributes } from 'react';

export interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> {
  children: JSX.Element[] | JSX.Element | string
  align?: 'right' | 'left' | 'center'
}
