import React, { type FC } from 'react';

import { StyledSpinner } from './styled';
import { type SpinnerProps } from './types';

export const Spinner: FC<SpinnerProps> = ({
  color = '#F0F0F1'
}) => (
  <StyledSpinner.SpinnerWrapper $color={color} className='lds-grid'>
      <div></div><div></div><div></div><div></div>
  </StyledSpinner.SpinnerWrapper>
);
