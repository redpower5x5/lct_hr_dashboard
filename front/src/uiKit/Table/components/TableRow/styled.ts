import styled from 'styled-components';

const TableRow = styled.tr`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacings.x8}px;
  }
`;

export const Styled = {
  TableRow
};
