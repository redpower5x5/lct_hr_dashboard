import styled, { css } from 'styled-components';

import { type DividerProps } from './types';

const Divider = styled.div<{
  $color?: DividerProps['color']
  $height?: DividerProps['height']
}>`
  width: 100%;
  height: ${({ $height }) => $height}px;
  ${({ $color }) =>
    $color &&
    css`
      background-color: ${$color};
    `}
`;

export const StyledDivider = {
  Divider
};
