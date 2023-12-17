import React, { forwardRef } from 'react';

import { StyledButton } from './styled';
import { type ButtonProps, ButtonSize, ButtonVariant } from './types';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      type = 'button',
      disabled,
      variant = ButtonVariant.PRIMARY,
      size = ButtonSize.DF,
      fullWidth,
      flex,
      ...props
    },
    ref
  ) => {
    return (
      <StyledButton.Button
        {...props}
        $fullWidth={fullWidth}
        ref={ref}
        type={type}
        disabled={disabled}
        $size={size}
        $variant={variant}
        $flex={flex}>
        {children}
      </StyledButton.Button>
    );
  }
);

Button.displayName = 'Button';
