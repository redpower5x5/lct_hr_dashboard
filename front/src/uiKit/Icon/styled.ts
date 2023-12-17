import styled, { css } from 'styled-components';

import { type IconProps, IconSize } from './types';

const getIconSizeCSS = {
  [IconSize.X12]: css`
    width: 12px;
    height: 12px;
  `,
  [IconSize.X16]: css`
    width: 16px;
    height: 16px;
  `,
  [IconSize.X20]: css`
    width: 20px;
    height: 20px;
  `,
  [IconSize.X24]: css`
    width: 24px;
    height: 24px;
  `,
  [IconSize.X32]: css`
    width: 32px;
    height: 32px;
  `,
  [IconSize.X42]: css`
    width: 42px;
    height: 42px;
  `,
  [IconSize.X50]: css`
    width: 50px;
    height: 50px;
  `
};

const Container = styled.div<{
  $size: IconProps['size']
  $icon?: string
  $color?: IconProps['color']
}>`
  -webkit-mask: url(${({ $icon }) => $icon}) no-repeat center/contain;
  mask: url(${({ $icon }) => $icon}) no-repeat center/contain;
  background-color: ${({ $color }) => $color};

  ${({ $size }) => $size && getIconSizeCSS[$size]}
`;

export const StyledIcon = {
  Container
};
