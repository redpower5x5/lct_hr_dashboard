import { type HTMLAttributes, type ReactNode } from 'react';

export enum TextAlign {
  CENTER = 'center',
  START = 'start',
  END = 'end',
}

export enum TextSize {
  S2 = 2,
  S3 = 3,
  M1 = 4,
  M2 = 6,
  ML = 5,
  L3 = 9,
  G2,
}

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  size?: TextSize
  color?: string
  fontWeight?: number
  children: ReactNode
  align?: TextAlign
}
