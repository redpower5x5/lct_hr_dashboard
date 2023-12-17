import styled, { css } from 'styled-components';

import { type InputProps } from '../Input/types';

const Textarea = styled.textarea<{
  $fullWidth?: InputProps['fullWidth']
  $flex?: InputProps['flex']
}>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.radiuses.df}px;
  box-sizing: border-box;
  transition: 0.25s;
  outline: none;
  border: 1px solid transparent;
  resize: none;
  padding: 14px 32px;
  min-height: 150px;
  background: #F0F0F1;
  
  &:focus-visible, &:active {
    border: 1px solid ${({ theme }) => theme.colors.base.acent};
  }
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.base.grey[350]};
  }

  ${({ $fullWidth }) =>
  $fullWidth &&
  css`
      width: 100%;
    `}

    ${({ $flex }) =>
  $flex &&
  css`
      flex: ${$flex};
    `}
`;

export const Styled = {
  Textarea
};
