import { type Images } from '@uiKit/Icon/constants/images';
import { type IconSize } from '@uiKit/Icon/types';

export enum IconLinkSize {
  SM = 1,
  DF,
  MD,
  LG
}

export enum IconLinkVariant {
  PRIMARY = 1,
}

export interface IconLinkProps {
  icon: Images
  iconSize?: IconSize
  to: string
  size?: IconLinkSize
  variant?: IconLinkVariant
}
