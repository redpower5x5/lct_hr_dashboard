import React, {
  type PropsWithChildren,
  forwardRef
} from 'react';

import { StyledIconButton } from './styled';
import { type IconButtonProps } from './types';

export const IconButton = forwardRef<HTMLButtonElement, PropsWithChildren<IconButtonProps>>(
  (
    { children, label, onClick, ...props },
    ref
  ) => {
    return (
      <StyledIconButton.Button
        {...props}
        onClick={onClick}
        ref={ref}
        aria-label={label}>
        {children}
      </StyledIconButton.Button>
    );
  }
);

IconButton.displayName = 'IconButton';
