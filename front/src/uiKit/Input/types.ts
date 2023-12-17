import { type HTMLAttributes, type HTMLInputTypeAttribute } from 'react';
export enum InputSize {
  SM = 'sm',
  DF = 'df',
  LG = 'lg',
}
export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  disabled?: boolean
  size?: InputSize
  fullWidth?: boolean
  flex?: string
  label?: string
  type?: HTMLInputTypeAttribute
  labelColor?: string
  error?: string
  value?: string
  name?: string
}
