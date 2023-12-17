import React, { type FC, forwardRef, useMemo } from 'react';

import { type SpacerProps } from './types';

export const Spacer: FC<SpacerProps> = forwardRef<HTMLDivElement, SpacerProps>(
  ({ space }, ref) => {
    const style = useMemo(
      () => ({
        height: space,
        width: space
      }),
      [space]
    );

    return <div ref={ref} aria-hidden='true' style={style} />;
  }
);

Spacer.displayName = 'Spacer';
