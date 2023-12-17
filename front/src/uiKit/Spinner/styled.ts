import { styled } from 'styled-components';

import { type SpinnerProps } from './types';

const SpinnerWrapper = styled.div<{ $color: SpinnerProps['color'] }>`
  display: inline-block;
  position: relative;
  width: 50px;
  height: 50px;

  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 35px;
    height: 35px;
    margin: 8px;
    border: 4px solid ${({ $color }) => $color};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${({ $color }) => $color} transparent transparent transparent;
  }

  & div:nth-child(1) {
    animation-delay: -0.45s;
  }

  & div:nth-child(2) {
    animation-delay: -0.3s;
  }

  & div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const StyledSpinner = {
  SpinnerWrapper
};
