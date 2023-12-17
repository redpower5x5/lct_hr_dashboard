import React, { forwardRef } from 'react';

import { useTheme } from 'styled-components';

import { Spacer } from '../Spacer';
import { Text } from '../Text';
import { TextSize } from '../Text/types';

import { Styled } from './styled';
import { type InputProps, InputSize } from './types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      disabled,
      size = InputSize.DF,
      fullWidth,
      flex,
      label,
      placeholder,
      labelColor,
      type,
      error,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();

    return (
      <>
        <Styled.Label $fullWidth={fullWidth}>
          {label && (
            <>
              <Text fontWeight={300} size={TextSize.S2} color={labelColor}>{label}</Text>
              <Spacer space={theme.spacings.x8} />
            </>
          )}
          <Styled.Input $error={Boolean(error)} $flex={flex} type={type} placeholder={placeholder} $size={size} ref={ref} {...props} disabled={disabled} />
        </Styled.Label>
      </>
    );
  }
);

Input.displayName = 'Input';
