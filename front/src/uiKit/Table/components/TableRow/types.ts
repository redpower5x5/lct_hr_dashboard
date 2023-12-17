import { type HTMLAttributes } from 'react';

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children: JSX.Element[] | JSX.Element
}
