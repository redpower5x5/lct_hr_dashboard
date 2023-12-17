export enum AvatarSizes {
  DEFAULT = 1, SMALL = 2, LARGE = 3
}

export interface AvatarProps {
  src: string
  size?: AvatarSizes
}
