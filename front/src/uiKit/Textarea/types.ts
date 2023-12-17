import { type HTMLAttributes } from 'react';

export interface TextareaProps extends HTMLAttributes<HTMLTextAreaElement> {
  disabled?: boolean
  fullWidth?: boolean
  flex?: string
  label?: string
  labelColor?: string
  readOnly?: boolean
  value?: string
}
