import styled, { css } from 'styled-components';

import { type ImageProps } from './types';

const Image = styled.img<{
  $fullWidth?: ImageProps['fullWidth']
  $fullHeight?: ImageProps['fullHeight']
  $borderRadius?: number
  $objectFit: ImageProps['objectFit']
}>`
  object-fit: ${({ $objectFit }) => $objectFit};
  
  ${({ $borderRadius }) => $borderRadius && css`
    border-radius: ${$borderRadius + 'px'};
  `}
  
  ${({ $fullWidth }) => $fullWidth && css`
    width: 100%;
  `}

  ${({ $fullHeight }) => $fullHeight && css`
    height: 100%;
  `}
`;

export const Styled = {
  Image
};
