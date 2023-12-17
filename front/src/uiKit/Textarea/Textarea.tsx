import React, { forwardRef } from 'react';

import { useTheme } from 'styled-components';

import { Spacer } from '../Spacer';
import { Text } from '../Text';
import { TextSize } from '../Text/types';

import { Styled } from './styled';
import { type TextareaProps } from './types';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      disabled,
      fullWidth,
      flex,
      label,
      placeholder,
      labelColor,
      readOnly,
      ...props
    },
    ref
  ) => {
    const theme = useTheme();
    return (
      <label>
        {label && (
          <>
            <Text fontWeight={300} size={TextSize.S2} color={labelColor}>{label}</Text>
            <Spacer space={theme.spacings.x8} />
          </>
        )}
        <Styled.Textarea {...props} readOnly={readOnly} placeholder={placeholder} $fullWidth={fullWidth} $flex={flex} ref={ref} disabled={disabled} />
      </label>
    );
  }
);

Textarea.displayName = 'Textarea';
