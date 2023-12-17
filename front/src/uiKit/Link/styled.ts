import { css, styled } from 'styled-components';

import { type LinkProps, LinkSize } from './types';

export const getLinkSizeCSS = {
  [LinkSize.SM]: css`
    font-size: 0.75rem;
  `,
  [LinkSize.DF]: css`
    font-size: 0.875rem;
  `,
  [LinkSize.MD]: css`
    font-size: 1rem;
  `,
  [LinkSize.LG]: css`
    font-size: clamp(1rem, 2vw, 1.15rem);
  `
};

const Link = styled.a<{
  $color?: LinkProps['color']
  $size: LinkProps['size']
  $isUnderline?: LinkProps['isUnderline']
}>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  text-decoration: none;
  outline: none;
  background: none;
  cursor: pointer;
  border: 0;
  padding-left: 0;
  padding-right: 0;
  transition: color 0.25s ease;

  ${({ $color }) => $color && css`
    color: ${$color};
  `};

  &:hover {
    color: ${({ theme }) => theme.colors.base.acent};
  }

  &:focus-visible {
    color: ${({ theme }) => theme.colors.base.acent};
    outline: none;
  }
  
  ${({ $isUnderline }) => $isUnderline && css`
    padding-bottom: ${({ theme }) => theme.spacings.x4}px;

    &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: -4px;
      width: 0;
      height: 1px;
      background: ${({ theme }) => theme.colors.base.light};
      transition: all .15s ease-out;
    }

    &:hover:after, &:focus-visible:after {
      width: 100%;
    }
  `}

  ${({ $size }) => $size && getLinkSizeCSS[$size]}
`;

export const StyledLink = {
  Link
};
