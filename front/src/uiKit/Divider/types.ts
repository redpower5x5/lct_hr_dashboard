import { type HTMLAttributes } from 'react';

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  height?: number
  color?: string
}
