import React, { type FC } from 'react';

import { useTheme } from 'styled-components';

import { Spacer, Text } from '@uiKit';

import { TextSize } from '@uiKit/Text/types';

import { DropdownIndicator, Option } from './components';
import { Styled } from './styled';
import { type SelectProps, SelectSize } from './types';

export const Select: FC<SelectProps> = ({ options, fullWidth, label, labelProps, size = SelectSize.DF, components, menuPlacement, ...props }) => {
  const theme = useTheme();

  return (
    <Styled.Label {...labelProps} $fullWidth={fullWidth}>
      {label && (
        <>
          <Text size={TextSize.S2}>{label}</Text>
          <Spacer space={theme.spacings.x8} />
        </>
      )}
      <Styled.Select {...props} menuPlacement={menuPlacement ?? 'auto'} options={options} components={{ DropdownIndicator, Option, ...components }} $size={size} />
    </Styled.Label>
  );
};
