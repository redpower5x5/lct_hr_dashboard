import { type HTMLAttributes, type ReactNode } from 'react';

export enum ButtonSize {
  SM = 'sm',
  DF = 'df',
  LG = 'lg',
}

export enum ButtonVariant {
  PRIMARY = 1,
  SECONDARY,
}

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  disabled?: boolean
  isBoxing?: boolean
  variant: ButtonVariant
  size?: ButtonSize
  type?: 'submit' | 'reset' | 'button'
  fullWidth?: boolean
  flex?: string
}
