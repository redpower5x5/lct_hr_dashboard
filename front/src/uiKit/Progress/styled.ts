import styled from 'styled-components';

import { type ProgressProps } from '@uiKit/Progress/types';

const Progress = styled.progress<{
  $fullWidth?: ProgressProps['fullWidth']
}>`
  height: 20px;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'initial')};

  &::-webkit-progress-bar {
    background-color: transparent;
    border-radius: 16px;
    border: 1px solid #F0F0F1;
  }
  
  &::-webkit-progress-value {
    background: ${({ theme }) => theme.colors.additional.brand_blue};
  }
`;

export const StyledFlex = {
  Progress
};
