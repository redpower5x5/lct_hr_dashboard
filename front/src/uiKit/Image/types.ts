import { type HTMLAttributes } from 'react';

export enum ImageObjectFit {
  CONTAIN = 'contain',
  COVER = 'cover'
}

export interface ImageProps extends HTMLAttributes<HTMLImageElement> {
  alt: string
  fullWidth?: boolean
  fullHeight?: boolean
  images: Array<{ image: string, type: 'webp' | 'png' | 'svg' | 'jpeg', isPreferable?: boolean }>
  radius?: number
  objectFit?: ImageObjectFit
}
