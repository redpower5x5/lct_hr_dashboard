import styled, { css } from 'styled-components';

import { type HeadingProps, HeadingSize } from './types';

const getHeadingSizeCSS = {
  [HeadingSize.SM]: css`
    font-size: clamp(1.25rem, 3vw, 1.5rem);
  `,
  [HeadingSize.SL]: css`
    font-size: 2.5rem;
  `,
  [HeadingSize.DF]: css`
    font-size: clamp(1.25rem, 3vw, 2.25rem);
  `,
  [HeadingSize.MD]: css`
    font-size: clamp(2rem, 3vw, 3rem);
  `,
  [HeadingSize.LG]: css`
    font-size: clamp(2.25rem, 5vw, 4rem);
  `
};

const Main = styled.h1<{
  $size?: HeadingProps['size']
  $fontWeight?: HeadingProps['fontWeight']
  $color?: HeadingProps['color']
  $align?: HeadingProps['align']
}>`
  font-weight: ${({ $fontWeight }) => $fontWeight};
  margin: 0;
  white-space: pre-line;

  ${({ $color }) =>
    $color &&
    css`
      color: ${$color};
    `}

  ${({ $align }) =>
    $align &&
    css`
      text-align: ${$align};
    `}

  ${({ $size }) => $size && getHeadingSizeCSS[$size]}
`;

export const StyleHeading = {
  Main
};
