import { type GroupBase, type MenuPlacement, type Props, type SelectComponentsConfig } from 'react-select';

export enum SelectSize {
  SM = 'sm',
  DF = 'df',
  LG = 'lg',
}

export interface SelectOption { value: string | number, label: string, icon?: JSX.Element }

export interface SelectProps extends Omit<Props, 'classNamePrefix' | 'theme'> {
  options: SelectOption[]
  size?: SelectSize
  label?: string
  components?: Partial<SelectComponentsConfig<unknown, boolean, GroupBase<unknown>>> | undefined
  menuPlacement?: MenuPlacement
  labelProps?: Record<string, any>
  fullWidth?: boolean
}
