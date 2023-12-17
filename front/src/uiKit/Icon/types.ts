import { type HTMLAttributes } from 'react';

import { type Images } from './constants/images';

export enum IconSize {
  X12 = '12',
  X16 = '16',
  X20 = '20',
  X24 = '24',
  X32 = '32',
  X42 = '42',
  X50 = '50'
}

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
  image: Images
  size?: IconSize
  color?: string
  label?: string
}
