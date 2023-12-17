import { type HTMLAttributes } from 'react';

export interface ProgressProps extends HTMLAttributes<HTMLProgressElement> {
  max: number
  value: number
  fullWidth?: boolean
}
