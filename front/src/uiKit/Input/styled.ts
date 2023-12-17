import styled, { css } from 'styled-components';

import { InputSize, type InputProps } from './types';

const getButtonSizeCSS = {
  [InputSize.SM]: css`
    padding: 10px 26px;
    min-height: 46px;
  `,
  [InputSize.DF]: css`
    padding: 14px 32px;
    min-height: 52px;
  `,
  [InputSize.LG]: css`
    padding: 20px 42px;
    min-height: 60px;
  `
};

const Label = styled.label<{ $fullWidth?: InputProps['fullWidth'] }>`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    max-width: initial;
  }
  
  ${({ $fullWidth }) =>
          $fullWidth &&
          css`
      width: 100%;
    `};
`;

const Input = styled.input<{
  $size: InputProps['size']
  $flex?: InputProps['flex']
  $error?: boolean
}>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.base.primary};
  border-radius: ${({ theme }) => theme.radiuses.df}px;
  box-sizing: border-box;
  transition: 0.25s;
  outline: none;
  width: 100%;
  border: 1px solid transparent;
  
  &:focus-visible, &:active {
    border: 1px solid ${({ theme }) => theme.colors.base.acent};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.base.grey[400]};
  }

  ${({ $error }) =>
          $error &&
          css`
            border-color: #ee1e1e;
          `
  }

  ${({ $size }) =>
    $size
      ? getButtonSizeCSS[$size]
      : null}

    ${({ $flex }) =>
    $flex &&
    css`
      flex: ${$flex};
    `}
`;

export const Styled = {
  Input,
  Label
};
