import { Link as _Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { type IconLinkProps, IconLinkSize, IconLinkVariant } from '@component/IconLink/types';
import { hexToRgba } from '@lib/hexToRgba';

export const getIconLinkSizeCSS = {
  [IconLinkSize.SM]: css`
    width: 24px;
    height: 24px;
    border-radius: ${({ theme }) => theme.radiuses.sm}px;
  `,
  [IconLinkSize.DF]: css`
    width: 32px;
    height: 32px;
    border-radius: ${({ theme }) => theme.radiuses.sm}px;
  `,
  [IconLinkSize.MD]: css`
    width: 36px;
    height: 36px;
    border-radius: ${({ theme }) => theme.radiuses.sm}px;
  `,
  [IconLinkSize.LG]: css`
    width: 48px;
    height: 48px;
    border-radius: ${({ theme }) => theme.radiuses.df}px;
  `
};

export const getIconLinkVariantCSS = {
  [IconLinkVariant.PRIMARY]: css`
    background: ${({ theme }) => theme.colors.base.grey[800]};
    
    &:hover {
      background: ${({ theme }) => hexToRgba(theme.colors.base.grey[800], 0.8)};
    }
  `
};

const Link = styled(_Link)<{
  $size: IconLinkProps['size']
  $variant: IconLinkProps['variant']
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.radiuses.df}px;
  transition: all .25s ease;
  
  ${({ $size }) => $size && getIconLinkSizeCSS[$size]}
  ${({ $variant }) => $variant && getIconLinkVariantCSS[$variant]}
`;

export const Styled = {
  Link
};
