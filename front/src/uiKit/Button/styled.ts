import styled, { css } from 'styled-components';

import { hexToRgba } from '../../lib/hexToRgba';
import { RADIUSES } from '../../lib/theme/constants/radiuses';

import { type ButtonProps, ButtonSize, ButtonVariant } from './types';

const getButtonBoxingSizeCSS = {
  [ButtonSize.SM]: css`
    height: 32px;
    width: 32px;
    font-size: 0.875rem;
  `,
  [ButtonSize.DF]: css`
    height: 40px;
    width: 40px;
    font-size: 1rem;
  `,
  [ButtonSize.LG]: css`
    height: 56px;
    width: 56px;
    font-size: 1rem;
  `
};

const getButtonSizeCSS = {
  [ButtonSize.SM]: css`
    height: 32px;
    padding: 0 16px;
    font-size: 0.875rem;
  `,
  [ButtonSize.DF]: css`
    height: 50px;
    padding: 0 24px;
    font-size: 1rem;
  `,
  [ButtonSize.LG]: css`
    height: 56px;
    padding: 0 24px;
    font-size: 1rem;
  `
};

const getButtonVariantCSS = {
  [ButtonVariant.PRIMARY]: css`
    background: ${({ theme }) => theme.colors.base.primary};
    color: ${({ theme }) => theme.colors.base.dark};

    &:hover {
      background: ${({ theme }) => hexToRgba(theme.colors.base.primary, 0.5)};
      color: ${({ theme }) => theme.colors.base.dark};
      transform: scale(.98);
    }

    &:disabled {
      background: ${({ theme }) => theme.colors.base.grey[350]};
    }
  `,
  [ButtonVariant.SECONDARY]: css`
    background: ${({ theme }) => theme.colors.additional.brand_blue};

    &:hover {
      background: ${({ theme }) => theme.colors.base.secondary};
      transform: scale(.98);
    }

    &:disabled {
      background: ${({ theme }) => theme.colors.base.grey[350]};
    }
  `
};

const Button = styled.button<{
  $variant: ButtonProps['variant']
  $size: ButtonProps['size']
  $isBoxing?: ButtonProps['isBoxing']
  $fullWidth?: ButtonProps['fullWidth']
  $flex?: ButtonProps['flex']
}>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${RADIUSES.DEFAULT}px;
  color: ${({ theme }) => theme.colors.base.light};
  padding: 16px 24px;
  border: 0;
  line-height: 24px;
  box-sizing: border-box;
  transition: 0.25s;
  font-weight: 500;

  ${({ $size, $isBoxing }) =>
    $size
      ? $isBoxing
        ? getButtonBoxingSizeCSS[$size]
        : getButtonSizeCSS[$size]
      : null}
  ${({ $variant }) => $variant && getButtonVariantCSS[$variant]}

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

  &:focus-visible {
    outline: 4px solid ${({ theme }) => theme.colors.focus};
  }
`;

export const StyledButton = {
  Button
};
