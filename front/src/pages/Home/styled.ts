import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div``;

const UserList = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
  gap: ${({ theme }) => theme.spacings.x24}px;
  
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    grid-template-columns: 1fr;
  }
`;

const UserLink = styled(Link)`
  text-decoration: none;
`;

export const Styled = {
  UserList,
  Wrapper,
  UserLink
};
