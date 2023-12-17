import { type HTMLAttributes, type ReactNode } from 'react';

export enum HeadingAlign {
  CENTER = 'center',
  END = 'end',
  START = 'start',
}

export enum HeadingType {
  H1 = 1,
  H2,
  H3,
  H4,
}

export enum HeadingSize {
  LG = 1,
  MD,
  DF,
  SM,
  SL
}

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  color?: string
  type?: HeadingType
  size?: HeadingSize
  fontWeight?: number
  children: ReactNode
  align?: HeadingAlign
}
