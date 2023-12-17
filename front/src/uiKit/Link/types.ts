export enum LinkSize {
  SM = 1,
  DF,
  MD,
  LG,
}

export interface LinkProps<C extends React.ElementType = 'a'> {
  as?: C
  color?: string
  size?: LinkSize
  isUnderline?: boolean
}
