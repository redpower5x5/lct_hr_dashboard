import styled, { css } from 'styled-components';

import { TextSize, type TextProps } from './types';

export const getTextSizeCSS = {
  [TextSize.S2]: css`
    font-size: clamp(0.75rem, 3vw, 0.875rem);
  `,
  [TextSize.S3]: css`
    font-size: clamp(0.875rem, 3vw, 1rem);
  `,
  [TextSize.M1]: css`
    font-size: clamp(1rem, 2vw, 1.25rem);
  `,
  [TextSize.M2]: css`
    font-size: clamp(1.25rem, 2vw, 1.5rem);
  `,
  [TextSize.ML]: css`
    font-size: clamp(1.5rem, 2vw, 2rem);
  `,
  [TextSize.L3]: css`
    font-size: clamp(2rem, 2vw, 3rem);
  `,
  [TextSize.G2]: css`
    font-size: clamp(2.5rem, 2vw, 4rem);
  `
};

const Main = styled.p<{
  $size?: TextProps['size']
  $fontWeight?: TextProps['fontWeight']
  $color?: TextProps['color']
  $align?: TextProps['align']
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

  ${({ $size }) => $size && getTextSizeCSS[$size]}
`;

export const StyleText = {
  Main
};
