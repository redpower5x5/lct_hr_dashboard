import { type HTMLAttributes } from 'react';

export interface IconButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string
  onClick?: VoidFunction
}
