import React, { forwardRef } from 'react';

import { StyledFlex } from './styled';
import { type ProgressProps } from './types';

export const Progress = forwardRef<HTMLProgressElement, ProgressProps>(
  (
    {
      fullWidth,
      ...props
    },
    ref
  ) => {
    return (
      <StyledFlex.Progress {...props} $fullWidth={fullWidth} ref={ref} />
    );
  }
);

Progress.displayName = 'Progress';
