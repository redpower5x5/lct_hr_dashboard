import styled, { css } from 'styled-components';

import { type AvatarProps, AvatarSizes } from './types';

const getAvatarSizeStyleCSS = {
  [AvatarSizes.SMALL]: css`
    width: 30px;
    height: 30px;
    border-radius: ${({ theme }) => theme.radiuses.sm}px;
  `,
  [AvatarSizes.DEFAULT]: css`
    width: 48px;
    height: 48px;
    border-radius: ${({ theme }) => theme.radiuses.df}px;
  `,
  [AvatarSizes.LARGE]: css`
    width: 64px;
    height: 64px;
    border-radius: ${({ theme }) => theme.radiuses.md}px;
  `
};

const Image = styled.img<{
  $size: AvatarProps['size']
}>`
  object-fit: cover;

  ${({ $size }) => $size && getAvatarSizeStyleCSS[$size]}
`;

export const StyledAvatar = {
  Image
};
