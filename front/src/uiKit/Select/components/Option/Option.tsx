import React, { type FC } from 'react';

import { components, type OptionProps } from 'react-select';
import { useTheme } from 'styled-components';

import { Flex, Spacer } from '@uiKit';

import { type SelectOption } from '../../types';

export const Option: FC<OptionProps> = ({ ...props }) => {
  const theme = useTheme();

  const data = (props.data as SelectOption);

  return (
    <components.Option {...props}>
      <Flex>
        {data?.icon && data?.icon}
        <Spacer space={theme.spacings.x12} />
        {data?.label}
      </Flex>
    </components.Option>
  );
};
