import React, { type FC } from 'react';

import { components, type DropdownIndicatorProps } from 'react-select';
import { useTheme } from 'styled-components';

import { Icon } from '@uiKit';

import { Images } from '@uiKit/Icon/constants/images';
import { IconSize } from '@uiKit/Icon/types';

export const DropdownIndicator: FC<DropdownIndicatorProps> = ({ ...props }) => {
  const theme = useTheme();

  return (
    <components.DropdownIndicator {...props}>
      <Icon image={Images.ARROW_DOWN} size={IconSize.X16} color={theme.colors.base.grey[350]} />
    </components.DropdownIndicator>
  );
};
