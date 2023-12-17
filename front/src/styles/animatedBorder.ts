import { css } from 'styled-components';

export const animatedBorder = (color: string) => css`
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    left: 1px;
    top: 1px;
    width: calc(100% - 2px);
    height: calc(100% - 2px);
    background: ${({ theme }) => theme.colors.base.grey[900]};
    border-radius: inherit;
  }

  &::before {
    content: '';
    opacity: 1;
    position: absolute;
    z-index: -2;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background-repeat: no-repeat;
    background-size: 100% 100%, 50% 50%;
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
    background-image: ${color};
    animation: bgRotate 4s linear infinite;
  }

  @keyframes bgRotate {
    100% {
      transform: rotate(1turn);
    }
  }
`;
