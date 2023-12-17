import { type HTMLAttributes, type ReactNode } from 'react';

export enum FlexAlignItems {
  START = 'start',
  END = 'end',
  CENTER = 'center',
  FLEX_END = 'flex-end',
  FLEX_START = 'flex-start',
  SPACE_BETWEEN = 'space-between',
  SPACE_EVENLY = 'space-evenly',
  SPACE_AROUND = 'space-around',
}

export enum FlexAlignContent {
  START = 'start',
  END = 'end',
  CENTER = 'center',
  FLEX_END = 'flex-end',
  FLEX_START = 'flex-start',
  SPACE_BETWEEN = 'space-between',
  SPACE_EVENLY = 'space-evenly',
  SPACE_AROUND = 'space-around',
}

export enum FlexJustifyItems {
  START = 'start',
  END = 'end',
  CENTER = 'center',
  FLEX_END = 'flex-end',
  FLEX_START = 'flex-start',
  SPACE_BETWEEN = 'space-between',
  SPACE_EVENLY = 'space-evenly',
  SPACE_AROUND = 'space-around',
}

export enum FlexJustifyContent {
  START = 'start',
  END = 'end',
  CENTER = 'center',
  FLEX_END = 'flex-end',
  FLEX_START = 'flex-start',
  SPACE_BETWEEN = 'space-between',
  SPACE_EVENLY = 'space-evenly',
  SPACE_AROUND = 'space-around',
}

export enum FlexDirection {
  COLUMN = 'column',
  COLUMN_REVERSE = 'column-reverse',
  ROW = 'row',
  ROW_REVERSE = 'row-reverse'
}

export enum FlexWrap {
  WRAP = 'wrap',
  NOWRAP = 'nowrap',
}

export interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  fullWidth?: boolean
  fullHeight?: boolean
  direction?: FlexDirection
  alignItems?: FlexAlignItems
  alignContent?: FlexAlignContent
  justifyItems?: FlexJustifyItems
  justifyContent?: FlexJustifyContent
  flexWrap?: FlexWrap
  flex?: string
  gap?: number
  children?: ReactNode
}
