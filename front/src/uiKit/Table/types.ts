import { type HTMLAttributes } from 'react';

export interface TableProps extends HTMLAttributes<HTMLTableElement> {
  children: JSX.Element[] | JSX.Element
  fullWidth?: boolean
  rowSpace?: number
  columnSpace?: number
}
