import styled from 'styled-components';

const TableBody = styled.tbody`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    & tr:not(:last-child) {
      margin-bottom: ${({ theme }) => theme.spacings.x24}px;
    }
  }
`;

export const Styled = {
  TableBody
};
