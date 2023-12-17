import styled, { css } from 'styled-components';

import { type TableProps } from '@uiKit/Table/types';

const Table = styled.table<{
  $fullWidth?: TableProps['fullWidth']
  $rowSpace?: TableProps['rowSpace']
}>`
  border-spacing: 0 ${({ $rowSpace }) => $rowSpace}px;
  border-collapse: separate;
  position: relative;
  
  ${({ $fullWidth }) => $fullWidth && css`
    width: 100%;
  `}
`;

export const Styled = {
  Table
};
