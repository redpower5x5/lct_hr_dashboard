import { type HTMLAttributes } from 'react';

export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: JSX.Element[] | JSX.Element
}
